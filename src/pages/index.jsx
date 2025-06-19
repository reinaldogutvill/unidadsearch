// /unidadsearch/pages/index.jsx

import { useState, useEffect } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import SmartResponseBox from '../../components/SmartResponseBox.jsx'

const translations = {
  en: {
    title: "UnidadSearch - Search Engine for Immigrants",
    searchPlaceholder: "Ask about your case, rights, or documents...",
    searchButton: "Search",
    saveInfo: "⭐ Save Info",
    downloadPdf: "⬇️ Download as PDF",
    savedInfo: "📂 My Saved Info",
    guidePrompt: "Let us guide you:",
    refineSearch: "Refine Search",
    q1: "Are you currently in immigration proceedings?",
    q2: "Do you currently have a lawyer?",
    q3: "What city are you in?",
    q4: "What best describes your situation?",
    q5: "What type of help do you need?",
    yes: "Yes",
    no: "No",
    arrival: "Recent arrival",
    resident: "Been here a while",
    legalHelp: "Legal help",
    formHelp: "Help with forms",
    caseUpdate: "Case update"
  },
  fr: {
    title: "Recherche Immigrée de Confiance",
    searchPlaceholder: "Posez une question sur votre dossier, vos droits ou vos documents...",
    searchButton: "Rechercher",
    saveInfo: "⭐ Sauvegarder l'info",
    downloadPdf: "⬇️ Télécharger en PDF",
    savedInfo: "📂 Mes Infos Sauvegardées",
    guidePrompt: "Laissez-nous vous guider :",
    refineSearch: "Affiner la recherche",
    q1: "Êtes-vous actuellement en procédure d'immigration ?",
    q2: "Avez-vous un avocat ?",
    q3: "Dans quelle ville êtes-vous ?",
    q4: "Quelle est votre situation ?",
    q5: "Quel type d'aide recherchez-vous ?",
    yes: "Oui",
    no: "Non",
    arrival: "Nouvel arrivant",
    resident: "Résident de longue date",
    legalHelp: "Aide juridique",
    formHelp: "Aide pour les formulaires",
    caseUpdate: "Mise à jour du dossier"
  },
  es: {
    title: "Búsqueda Confiable para Inmigrantes",
    searchPlaceholder: "Pregunta sobre tu caso, derechos o documentos...",
    searchButton: "Buscar",
    saveInfo: "⭐ Guardar información",
    downloadPdf: "⬇️ Descargar como PDF",
    savedInfo: "📂 Mi información guardada",
    guidePrompt: "Déjanos guiarte:",
    refineSearch: "Refinar búsqueda",
    q1: "¿Está actualmente en procedimientos de inmigración?",
    q2: "¿Tiene un abogado?",
    q3: "¿En qué ciudad está?",
    q4: "¿Cuál describe mejor su situación?",
    q5: "¿Qué tipo de ayuda necesita?",
    yes: "Sí",
    no: "No",
    arrival: "Recién llegado",
    resident: "Lleva tiempo aquí",
    legalHelp: "Ayuda legal",
    formHelp: "Ayuda con formularios",
    caseUpdate: "Actualización del caso"
  },
  zh: {
    title: "可信移民搜索",
    searchPlaceholder: "询问有关您的案件、权利或文件的问题...",
    searchButton: "搜索",
    saveInfo: "⭐ 保存信息",
    downloadPdf: "⬇️ 下载为 PDF",
    savedInfo: "📂 我的已保存信息",
    guidePrompt: "让我们来指导您：",
    refineSearch: "优化搜索",
    q1: "您目前正在移民程序中吗？",
    q2: "您现在有律师吗？",
    q3: "您在哪个城市？",
    q4: "哪种情况最符合您的身份？",
    q5: "您需要哪种帮助？",
    yes: "是",
    no: "否",
    arrival: "刚到美国",
    resident: "在美国居住一段时间",
    legalHelp: "法律帮助",
    formHelp: "表格协助",
    caseUpdate: "案件更新"
  },
  ar: {
    title: "بحث موثوق للمهاجرين",
    searchPlaceholder: "اسأل عن حالتك أو حقوقك أو مستنداتك...",
    searchButton: "بحث",
    saveInfo: "⭐ حفظ المعلومات",
    downloadPdf: "⬇️ تحميل كملف PDF",
    savedInfo: "📂 معلوماتي المحفوظة",
    guidePrompt: "دعنا نرشدك:",
    refineSearch: "تصفية البحث",
    q1: "هل أنت حاليًا في إجراءات الهجرة؟",
    q2: "هل لديك محامٍ؟",
    q3: "في أي مدينة أنت؟",
    q4: "ما الذي يصف حالتك بشكل أفضل؟",
    q5: "ما نوع المساعدة التي تحتاجها؟",
    yes: "نعم",
    no: "لا",
    arrival: "وصلت حديثًا",
  }
}
function matchIntent(query) {
  const q = query.toLowerCase()
  if (q.includes("missed") && q.includes("court")) return "emergency"
  if (q.includes("change") && q.includes("address")) return "change-of-address"
  if (q.includes("asylum") && q.includes("deadline")) return "asylum-deadline"
  if ((q.includes("work permit") || q.includes("ead")) && !q.includes("asylum")) return "work-eligibility"
  return "general"
}

export default function ImmigrantSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [queryType, setQueryType] = useState(null)
  const [followUp, setFollowUp] = useState({})
  const [saved, setSaved] = useState([])
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const existing = localStorage.getItem('savedResults')
    if (existing) setSaved(JSON.parse(existing))
  }, [])

  function saveResult(result) {
    const updated = [...saved, result]
    setSaved(updated)
    localStorage.setItem('savedResults', JSON.stringify(updated))
  }

  function downloadPDF() {
    const doc = new jsPDF()
    doc.setFontSize(14)
    doc.text("My Saved Info:", 10, 10)
    const rows = saved.map((item, index) => [ `${index + 1}. ${item.title}`, item.snippet || '', item.link ])
    autoTable(doc, {
      head: [['Title', 'Description', 'Link']],
      body: rows,
      startY: 20,
      styles: { fontSize: 10, cellPadding: 4, valign: 'top', overflow: 'linebreak' },
      columnStyles: { 0: { cellWidth: 55 }, 1: { cellWidth: 90 }, 2: { cellWidth: 40, halign: 'left' } },
      headStyles: { fillColor: [22, 160, 133], textColor: 255, halign: 'left' },
      theme: 'grid'
    })
    doc.save("saved-info.pdf")
  }

  async function handleSearch(e) {
    e.preventDefault()
    await performSearch(query)
  }

  async function performSearch(searchQuery) {
    setLoading(true)
    setQueryType(matchIntent(searchQuery))
    const res = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
    const data = await res.json()
    setResults(data.results)
    setLoading(false)
  }

  function handleRefineSearch() {
    const extraTerms = [
      followUp.needType,
      followUp.residency,
      'immigrant legal help',
      followUp.city,
      language !== 'en' ? language : ''
    ].filter(Boolean).join(' ')
    const refinedQuery = `${query} ${extraTerms}`.trim()
    setQuery(refinedQuery)
    performSearch(refinedQuery)
  }

  const t = translations[language]

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-end mb-4">
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border rounded p-1">
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="zh">中文</option>
          <option value="ar">العربية</option>
        </select>
      </div>
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full p-2 border rounded mb-2"
        />
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {t.searchButton}
          </button>
         
        </div>
      </form>

      {queryType && (
        <SmartResponseBox
          type={queryType}
          followUp={followUp}
          setFollowUp={setFollowUp}
          onRefineSearch={handleRefineSearch}
          lang={language}
        />
      )}

      {loading && <p className="text-gray-600">Searching trusted sources...</p>}

      {saved.length > 0 && (
        <div className="mb-6 border rounded p-4 bg-yellow-50">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold mb-2">{t.savedInfo}</h2>
            <button onClick={downloadPDF} className="text-sm text-blue-700 underline">{t.downloadPdf}</button>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1">
            {saved.map((item, i) => (
              <li key={i}><a href={item.link} target="_blank" className="text-blue-600 hover:underline">{item.title}</a></li>
            ))}
          </ul>
        </div>
      )}

      {Array.isArray(results) && results.length > 0 && (
        <div className="space-y-4">
          {results.map((r, i) => (
            <div key={i} className="border p-4 rounded shadow">
              <h2 className="font-semibold text-lg">{r.title}</h2>
              <p className="text-sm text-gray-600">{r.snippet}</p>
              <a href={r.link} target="_blank" className="text-blue-500 hover:underline block mt-1">Visit Source ↗</a>
              <button onClick={() => saveResult(r)} className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded">{t.saveInfo}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
