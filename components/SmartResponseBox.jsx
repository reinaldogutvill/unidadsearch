// /unidadsearch/components/SmartResponseBox.jsx

const translationMap = {
  en: {
    guide: "Let us guide you:",
    needHelp: "What do you need help with?",
    residency: "Are you currently living in the U.S.?",
    city: "What city are you in?",
    language: "Language (optional)",
    cityPlaceholder: "e.g. Bronx, NYC",
    languagePlaceholder: "e.g. Spanish, Arabic",
    refineButton: "Refine Search",
    select: "Select",
    yes: "Yes",
    no: "No",
    legalAid: "Legal Aid",
    formHelp: "Form help",
    caseUpdate: "Case update",
    inProceedings: "Are you currently in immigration proceedings?",
    hasLawyer: "Do you currently have a lawyer?",
    arrival: "Recent arrival",
    resident: "Been here a while",
    msg_noLawyer: "🧠 It sounds like you may need legal help but don’t currently have a lawyer. Consider contacting a trusted nonprofit legal organization in __CITY__.",
    msg_formHelpInProceedings: "🧠 Form support during immigration proceedings can be crucial. Make sure to check deadlines and consider legal aid for reviewing forms.",
    msg_caseUpdateNewArrival: "🧠 If you're new to the U.S., case updates can be accessed through EOIR or USCIS portals. Local legal aid groups can also assist in checking your hearing status.",
    msg_genericAdvice: "🧠 Try to include any deadlines or paperwork you’ve received in your query to get the most relevant results.",
    defaultCity: "your area"

  },
  fr: {
    guide: "Laissez-nous vous guider :",
    needHelp: "De quoi avez-vous besoin d'aide ?",
    residency: "Vivez-vous actuellement aux États-Unis ?",
    city: "Dans quelle ville êtes-vous ?",
    language: "Langue (facultatif)",
    cityPlaceholder: "ex. Bronx, NYC",
    languagePlaceholder: "ex. Espagnol, Arabe",
    refineButton: "Affiner la recherche",
    select: "Sélectionner",
    yes: "Oui",
    no: "Non",
    legalAid: "Aide juridique",
    formHelp: "Aide pour les formulaires",
    caseUpdate: "Mise à jour du dossier",
    inProceedings: "Êtes-vous actuellement en procédure d'immigration ?",
    hasLawyer: "Avez-vous un avocat ?",
    arrival: "Nouvel arrivant",
    resident: "Résident de longue date",
    msg_noLawyer: "🧠 Il semble que vous pourriez avoir besoin d'une aide juridique mais que vous n'avez pas d'avocat. Envisagez de contacter une organisation juridique à but non lucratif de confiance à __CITY__.",
    msg_formHelpInProceedings: "🧠 L'assistance pour les formulaires pendant les procédures d'immigration peut être essentielle. Assurez-vous de vérifier les délais et envisagez une aide juridique pour les relire.",
    msg_caseUpdateNewArrival: "🧠 Si vous êtes nouveau aux États-Unis, les mises à jour de dossier peuvent être consultées sur les portails de l’EOIR ou de l’USCIS. Des groupes juridiques locaux peuvent également vous aider à vérifier votre audience.",
    msg_genericAdvice: "🧠 Essayez d’inclure toute date limite ou tout document que vous avez reçu dans votre demande pour obtenir les résultats les plus pertinents.",
    defaultCity: "votre région"

  },
  es: {
    guide: "Déjanos guiarte:",
    needHelp: "¿Con qué necesitas ayuda?",
    residency: "¿Vives actualmente en los EE. UU.?",
    city: "¿En qué ciudad estás?",
    language: "Idioma (opcional)",
    cityPlaceholder: "ej. Bronx, NYC",
    languagePlaceholder: "ej. Español, Árabe",
    refineButton: "Refinar búsqueda",
    select: "Seleccionar",
    yes: "Sí",
    no: "No",
    legalAid: "Ayuda legal",
    formHelp: "Ayuda con formularios",
    caseUpdate: "Actualización del caso",
    inProceedings: "¿Estás actualmente en procedimientos de inmigración?",
    hasLawyer: "¿Tienes un abogado?",
    arrival: "Recién llegado",
    resident: "Llevo tiempo aquí",
    msg_noLawyer: "🧠 Parece que podrías necesitar ayuda legal pero no tienes abogado. Considera contactar con una organización legal sin fines de lucro en __CITY__.",
    msg_formHelpInProceedings: "🧠 El apoyo con formularios durante los procedimientos de inmigración puede ser crucial. Asegúrate de revisar los plazos y considera obtener ayuda legal para revisar los formularios.",
    msg_caseUpdateNewArrival: "🧠 Si eres nuevo en los EE. UU., puedes acceder a actualizaciones de casos en los portales de EOIR o USCIS. Grupos legales locales también pueden ayudarte a verificar tu audiencia.",
    msg_genericAdvice: "🧠 Intenta incluir cualquier fecha límite o documento que hayas recibido en tu consulta para obtener resultados más relevantes.",
    defaultCity: "tu área"

  },
  zh: {
    guide: "让我们来指导您：",
    needHelp: "您需要什么帮助？",
    residency: "您目前住在美国吗？",
    city: "您在哪个城市？",
    language: "语言（可选）",
    cityPlaceholder: "例如 纽约市 布朗克斯",
    languagePlaceholder: "例如 西班牙语，阿拉伯语",
    refineButton: "优化搜索",
    select: "请选择",
    yes: "是",
    no: "否",
    legalAid: "法律援助",
    formHelp: "表格帮助",
    caseUpdate: "案件更新",
    inProceedings: "您目前正在移民程序中吗？",
    hasLawyer: "您有律师吗？",
    arrival: "刚到美国",
    resident: "在美国居住一段时间",
    msg_noLawyer: "🧠 您可能需要法律帮助，但目前没有律师。建议您联系__CITY__当地值得信赖的非营利法律组织。",
    msg_formHelpInProceedings: "🧠 在移民程序中填写表格时获得支持至关重要。请确保检查截止日期，并考虑寻求法律援助来审查表格。",
    msg_caseUpdateNewArrival: "🧠 如果您是新来美国，可以通过 EOIR 或 USCIS 门户网站获取案件更新。本地法律援助团体也可以协助您查看听证状态。",
    msg_genericAdvice: "🧠 请尽量在您的查询中包含任何截止日期或收到的文件，以获得最相关的结果。",
    defaultCity: "您所在的地区"

  },
  ar: {
    guide: "دعنا نرشدك:",
    needHelp: "بماذا تحتاج المساعدة؟",
    residency: "هل تعيش حاليًا في الولايات المتحدة؟",
    city: "في أي مدينة أنت؟",
    language: "اللغة (اختياري)",
    cityPlaceholder: "مثال: برونكس، نيويورك",
    languagePlaceholder: "مثال: الإسبانية، العربية",
    refineButton: "تصفية البحث",
    select: "اختر",
    yes: "نعم",
    no: "لا",
    legalAid: "مساعدة قانونية",
    formHelp: "مساعدة في النماذج",
    caseUpdate: "تحديث القضية",
    inProceedings: "هل أنت حاليًا في إجراءات الهجرة؟",
    hasLawyer: "هل لديك محامٍ؟",
    arrival: "وصلت حديثًا",
    resident: "مقيم منذ فترة",
    msg_noLawyer: "🧠 يبدو أنك قد تحتاج إلى مساعدة قانونية ولكن ليس لديك محامٍ حاليًا. فكر في التواصل مع منظمة قانونية غير ربحية موثوقة في __CITY__.",
    msg_formHelpInProceedings: "🧠 دعم النماذج أثناء إجراءات الهجرة قد يكون أمرًا حاسمًا. تأكد من مراجعة المواعيد النهائية واطلب المساعدة القانونية لمراجعة النماذج.",
    msg_caseUpdateNewArrival: "🧠 إذا كنت جديدًا في الولايات المتحدة، يمكنك الوصول إلى تحديثات القضية من خلال بوابات EOIR أو USCIS. يمكن للمجموعات القانونية المحلية أيضًا مساعدتك في التحقق من موعد الجلسة.",
    msg_genericAdvice: "🧠 حاول تضمين أي مواعيد نهائية أو مستندات تلقيتها في سؤالك للحصول على نتائج أكثر دقة.",
    defaultCity: "منطقتك"

  }  
}

export default function SmartResponseBox({ type, followUp, setFollowUp, onRefineSearch, lang }) {
 // if (type !== 'general') return SmartResponsePresets[type] || null

  const labels = translationMap[lang] || translationMap.en
  const legalThinkingMessage = generateLegalThinkingMessage(followUp, labels)

  return (
    <div className="bg-gray-100 border border-gray-300 text-gray-800 p-4 rounded mb-4">
      <p className="font-semibold">{labels.guide}</p>

      <div className="mt-2">
        <label className="block font-medium mb-1">{labels.needHelp}</label>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setFollowUp((prev) => ({ ...prev, needType: e.target.value }))}
          value={followUp.needType || ''}
        >
          <option value="">{labels.select}</option>
          <option value="legal aid">{labels.legalAid}</option>
          <option value="form help">{labels.formHelp}</option>
          <option value="case update">{labels.caseUpdate}</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block font-medium mb-1">{labels.inProceedings}</label>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setFollowUp((prev) => ({ ...prev, inProceedings: e.target.value }))}
          value={followUp.inProceedings || ''}
        >
          <option value="">{labels.select}</option>
          <option value="yes">{labels.yes}</option>
          <option value="no">{labels.no}</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block font-medium mb-1">{labels.hasLawyer}</label>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setFollowUp((prev) => ({ ...prev, hasLawyer: e.target.value }))}
          value={followUp.hasLawyer || ''}
        >
          <option value="">{labels.select}</option>
          <option value="yes">{labels.yes}</option>
          <option value="no">{labels.no}</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block font-medium mb-1">{labels.residency}</label>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setFollowUp((prev) => ({ ...prev, residency: e.target.value }))}
          value={followUp.residency || ''}
        >
          <option value="">{labels.select}</option>
          <option value="arrival">{labels.arrival}</option>
          <option value="resident">{labels.resident}</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block font-medium mb-1">{labels.city}</label>
        <input
          type="text"
          placeholder={labels.cityPlaceholder}
          className="w-full p-2 border rounded"
          onChange={(e) => setFollowUp((prev) => ({ ...prev, city: e.target.value }))}
          value={followUp.city || ''}
        />
      </div>

      <div className="mt-4">
        <label className="block font-medium mb-1">{labels.language}</label>
        <input
          type="text"
          placeholder={labels.languagePlaceholder}
          className="w-full p-2 border rounded"
          onChange={(e) => setFollowUp((prev) => ({ ...prev, extraLang: e.target.value }))}
          value={followUp.extraLang || ''}
        />
      </div>

      <div className="mt-4">
        <button
          onClick={onRefineSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {labels.refineButton}
        </button>
      </div>

      {legalThinkingMessage && (
        <div className="mt-6 p-3 bg-yellow-50 border border-yellow-300 rounded text-sm text-yellow-800">
          {legalThinkingMessage}
        </div>
      )}
    </div>
  )
}

function generateLegalThinkingMessage(followUp, labels) {
  if (!followUp || !followUp.needType) return null
  const { inProceedings, hasLawyer, city, residency, needType } = followUp

  if (needType === 'legal aid' && hasLawyer === 'no') {
    return labels.msg_noLawyer.replace('__CITY__', city || labels.defaultCity || 'your area')
  }
  if (needType === 'form help' && inProceedings === 'yes') {
    return labels.msg_formHelpInProceedings
  }
  if (needType === 'case update' && residency === 'arrival') {
    return labels.msg_caseUpdateNewArrival
  }

  return labels.msg_genericAdvice
}
