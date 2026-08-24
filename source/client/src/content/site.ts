/**
 * Design system reminder — Calm Laboratory: restrained, bilingual health education.
 * Content is educational only; wording must avoid diagnosis and treatment claims.
 */
export type Language = "en" | "ar";

export type Localized = Record<Language, string>;

export const text = (value: Localized, language: Language) => value[language];

export type Article = {
  slug: string;
  image: string;
  category: Localized;
  title: Localized;
  excerpt: Localized;
  description: Localized;
  readingTime: Localized;
  body: Localized[];
  observe: Localized[];
  care: Localized;
};

export const articles: Article[] = [
  {
    slug: "kidney-stones-urine-color",
    image: "/manus-storage/kidney-stones-cover_053b2109.jpg",
    category: { en: "Kidney & urinary health", ar: "صحة الكلى والمسالك" },
    title: { en: "Kidney stones: when pain and urine color deserve attention", ar: "حصى الكلى: متى يستدعي الألم ولون البول الانتباه؟" },
    excerpt: { en: "A practical overview of kidney-stone symptoms, urine color changes, and the signs that should prompt timely care.", ar: "نظرة عملية على أعراض حصى الكلى وتغير لون البول والعلامات التي تستدعي رعاية في الوقت المناسب." },
    description: { en: "Kidney stones may cause severe side or back pain and can sometimes be associated with blood in urine. This guide explains the context without treating color as a diagnosis.", ar: "قد تسبب حصى الكلى ألماً شديداً في الخاصرة أو الظهر وقد ترتبط أحياناً بوجود دم في البول. يشرح هذا الدليل السياق دون اعتبار اللون تشخيصاً." },
    readingTime: { en: "4 min read", ar: "قراءة ٤ دقائق" },
    body: [
      { en: "A stone can irritate the urinary tract as it moves. Urine may look pink, red, or brown when blood is present, but food, medicines, and other conditions may also alter the appearance.", ar: "قد تهيّج الحصاة المسالك البولية أثناء تحركها. وقد يبدو البول وردياً أو أحمر أو بنياً عند وجود دم، لكن الطعام والأدوية وحالات أخرى قد تغيّر المظهر أيضاً." },
      { en: "Color is only one observation. Sudden or severe flank pain, vomiting, fever, trouble passing urine, or visible blood are more useful reasons to seek prompt clinical assessment.", ar: "اللون ملاحظة واحدة فقط. الألم المفاجئ أو الشديد في الخاصرة، والقيء، والحمى، وصعوبة التبول، أو الدم المرئي هي أسباب أهم لطلب التقييم الطبي بسرعة." },
    ],
    observe: [
      { en: "A new pink, red, or brown appearance", ar: "مظهر وردي أو أحمر أو بني جديد" },
      { en: "One-sided back or side pain", ar: "ألم في جانب واحد من الظهر أو الخاصرة" },
      { en: "Nausea or difficulty passing urine", ar: "غثيان أو صعوبة في إخراج البول" },
    ],
    care: { en: "Seek urgent care for severe pain, fever, inability to urinate, or visible blood without a clear temporary explanation.", ar: "اطلب رعاية عاجلة عند ألم شديد أو حمى أو عدم القدرة على التبول أو دم مرئي دون تفسير مؤقت واضح." },
  },
  {
    slug: "blood-in-urine-hematuria",
    image: "/manus-storage/hematuria-cover_3b9d04ca.jpg",
    category: { en: "Important urine signals", ar: "علامات البول المهمة" },
    title: { en: "Blood in urine: changes that should not be ignored", ar: "الدم في البول: تغيّرات لا ينبغي تجاهلها" },
    excerpt: { en: "What pink, red, or brown urine can mean, why it needs context, and which accompanying symptoms matter most.", ar: "ما الذي قد يعنيه البول الوردي أو الأحمر أو البني، ولماذا يحتاج إلى سياق، وما الأعراض المصاحبة الأكثر أهمية." },
    description: { en: "Blood in urine is called hematuria. It may be visible or only found in testing, and it can have several possible causes that need clinical context.", ar: "يسمى وجود الدم في البول بالبيلة الدموية. قد يكون مرئياً أو يُكتشف فقط بالفحص، وله أسباب محتملة متعددة تحتاج إلى سياق سريري." },
    readingTime: { en: "5 min read", ar: "قراءة ٥ دقائق" },
    body: [
      { en: "Some foods, such as beets, can temporarily change urine color. However, visible blood or a persistent red-brown change should not be self-diagnosed from a chart.", ar: "قد تغير بعض الأطعمة، مثل الشمندر، لون البول مؤقتاً. لكن الدم المرئي أو التغير الأحمر-البني المستمر لا ينبغي تشخيصه ذاتياً بالاعتماد على مخطط." },
      { en: "Urinary tract infections and stones can be associated with blood in urine, but a clinician may need a history, examination, and urine testing to understand the cause.", ar: "قد ترتبط التهابات المسالك وحصوات الكلى بوجود دم في البول، لكن الطبيب قد يحتاج إلى تاريخ مرضي وفحص وتحليل بول لفهم السبب." },
    ],
    observe: [
      { en: "Pink, red, cola-colored, or visibly bloody urine", ar: "بول وردي أو أحمر أو بلون الكولا أو دموي بوضوح" },
      { en: "Burning, pain, fever, or a new urinary symptom", ar: "حرقان أو ألم أو حمى أو عرض بولي جديد" },
      { en: "A color change that continues after a possible food trigger has passed", ar: "تغير لون يستمر بعد زوال أثر طعام محتمل" },
    ],
    care: { en: "Contact a healthcare professional about blood in urine. Seek urgent help if it occurs with severe pain, fever, faintness, or an inability to urinate.", ar: "تواصل مع مختص صحي عند وجود دم في البول. اطلب مساعدة عاجلة إذا ترافق مع ألم شديد أو حمى أو دوخة أو عدم القدرة على التبول." },
  },
  {
    slug: "chronic-kidney-disease-urine-signs",
    image: "/manus-storage/ckd-cover_d7fa772a.jpg",
    category: { en: "Kidney health", ar: "صحة الكلى" },
    title: { en: "Chronic kidney disease: why signs can be subtle", ar: "مرض الكلى المزمن: لماذا قد تكون العلامات خفية؟" },
    excerpt: { en: "An educational introduction to urinary changes, risk factors, and the tests clinicians use to assess kidney health.", ar: "مقدمة تثقيفية للتغيرات البولية وعوامل الخطورة والفحوص التي يستخدمها الأطباء لتقييم صحة الكلى." },
    description: { en: "Chronic kidney disease may develop with few early symptoms. Urine color alone cannot identify it; routine assessment is based on the broader clinical picture and tests.", ar: "قد يتطور مرض الكلى المزمن مع أعراض قليلة في البداية. لا يمكن للون البول وحده تحديده؛ ويعتمد التقييم على الصورة السريرية الأوسع والفحوص." },
    readingTime: { en: "5 min read", ar: "قراءة ٥ دقائق" },
    body: [
      { en: "Changes in urine frequency, persistent foaming, swelling, or blood may be noticed by some people, but they are not specific to chronic kidney disease.", ar: "قد يلاحظ بعض الأشخاص تغير تواتر البول أو رغوة مستمرة أو تورماً أو دماً، لكنها ليست علامات خاصة بمرض الكلى المزمن وحده." },
      { en: "Kidney health is usually assessed through blood and urine tests interpreted alongside medical history. If you have diabetes, high blood pressure, or a family history of kidney disease, routine care matters.", ar: "تُقيَّم صحة الكلى عادةً عبر تحاليل الدم والبول مع التاريخ الصحي. إذا كنت مصاباً بالسكري أو ارتفاع الضغط أو لديك تاريخ عائلي لأمراض الكلى، فالمتابعة الدورية مهمة." },
    ],
    observe: [
      { en: "Persistent urinary changes rather than a single observation", ar: "تغيرات بولية مستمرة لا ملاحظة واحدة" },
      { en: "Swelling, fatigue, or a changed urine pattern", ar: "تورم أو تعب أو تغير في نمط البول" },
      { en: "Existing diabetes, high blood pressure, or family history", ar: "سكري أو ضغط مرتفع أو تاريخ عائلي قائم" },
    ],
    care: { en: "Book routine medical advice for persistent changes or kidney-risk factors; emergency care is appropriate for sudden severe symptoms or very little urine.", ar: "احجز استشارة روتينية عند تغيرات مستمرة أو وجود عوامل خطورة كلوية؛ وتناسب الرعاية الطارئة الأعراض الشديدة المفاجئة أو قلة البول الشديدة." },
  },
  {
    slug: "foamy-urine-proteinuria",
    image: "/manus-storage/foamy-urine-cover_b6057c45.jpg",
    category: { en: "Urine testing", ar: "تحليل البول" },
    title: { en: "Foamy urine and protein: when to ask about testing", ar: "البول الرغوي والبروتين: متى تسأل عن الفحص؟" },
    excerpt: { en: "A clear distinction between temporary bubbles and persistent foamy urine, plus the role of a urine test.", ar: "تمييز واضح بين الفقاعات العابرة والبول الرغوي المستمر، مع دور تحليل البول." },
    description: { en: "A quick stream can make temporary bubbles. Persistently foamy urine may have different explanations and is best assessed with appropriate testing rather than appearance alone.", ar: "يمكن لتدفق البول السريع أن ينتج فقاعات مؤقتة. قد تكون للرغوة المستمرة تفسيرات مختلفة ومن الأفضل تقييمها بالفحوص المناسبة لا بالمظهر وحده." },
    readingTime: { en: "4 min read", ar: "قراءة ٤ دقائق" },
    body: [
      { en: "Bubbles that disappear quickly can occur with a forceful stream or concentrated urine. Repeated, dense foam is different from one isolated observation.", ar: "قد تظهر فقاعات تزول سريعاً بسبب تدفق قوي أو بول مركز. الرغوة الكثيفة المتكررة تختلف عن ملاحظة منفردة." },
      { en: "Protein in urine is measured with clinical testing. A clinician may consider urine analysis and other information rather than drawing conclusions from foam alone.", ar: "يُقاس البروتين في البول بالفحوص السريرية. وقد ينظر المختص إلى تحليل البول ومعلومات أخرى بدلاً من استنتاجات مبنية على الرغوة وحدها." },
    ],
    observe: [
      { en: "Foam that is repeated and does not clear quickly", ar: "رغوة متكررة لا تختفي سريعاً" },
      { en: "New swelling or a noticeable change in urination", ar: "تورم جديد أو تغير ملحوظ في التبول" },
      { en: "Other symptoms or existing kidney risk factors", ar: "أعراض أخرى أو عوامل خطورة كلوية قائمة" },
    ],
    care: { en: "Arrange a non-emergency medical review if persistent foam is new or accompanies swelling, blood in urine, or other ongoing symptoms.", ar: "رتّب مراجعة طبية غير طارئة إذا كانت الرغوة المستمرة جديدة أو ترافقها وذمة أو دم في البول أو أعراض أخرى متواصلة." },
  },
  {
    slug: "kidney-infection-pyelonephritis",
    image: "/manus-storage/kidney-infection-cover_2474555e.jpg",
    category: { en: "Urinary infections", ar: "التهابات المسالك" },
    title: { en: "Kidney infection: how it differs from bladder symptoms", ar: "التهاب الكلى: كيف يختلف عن أعراض المثانة؟" },
    excerpt: { en: "An educational guide to symptoms that can suggest a urinary infection needs prompt professional care.", ar: "دليل تثقيفي للأعراض التي قد تشير إلى أن عدوى المسالك تحتاج إلى رعاية مهنية سريعة." },
    description: { en: "Urinary symptoms can have different causes. Fever, pain in the side or back, and feeling very unwell need prompt professional assessment.", ar: "قد يكون للأعراض البولية أسباب مختلفة. الحمى وألم الجانب أو الظهر والشعور بتوعك شديد تحتاج إلى تقييم مهني سريع." },
    readingTime: { en: "4 min read", ar: "قراءة ٤ دقائق" },
    body: [
      { en: "Burning while urinating, urgency, or cloudy-looking urine may occur with a urinary tract infection, but no single sign confirms the cause.", ar: "قد يحدث حرقان عند التبول أو إلحاح أو بول يبدو عكراً مع التهاب المسالك، لكن لا توجد علامة واحدة تؤكد السبب." },
      { en: "When infection affects the upper urinary tract, symptoms can include fever, chills, or side/back pain. These symptoms should be assessed promptly rather than managed from a color guide.", ar: "عندما تؤثر العدوى في الجزء العلوي من المسالك قد تشمل الأعراض حمى أو قشعريرة أو ألم جانب/ظهر. ينبغي تقييمها بسرعة بدلاً من التعامل معها من مخطط لون." },
    ],
    observe: [
      { en: "Burning or urgency with urination", ar: "حرقان أو إلحاح عند التبول" },
      { en: "Fever, chills, or flank pain", ar: "حمى أو قشعريرة أو ألم في الخاصرة" },
      { en: "Feeling markedly unwell or vomiting", ar: "شعور واضح بالتوعك أو قيء" },
    ],
    care: { en: "Seek same-day professional advice for urinary symptoms with fever, flank pain, vomiting, or pregnancy; seek urgent care if symptoms are severe.", ar: "اطلب نصيحة مهنية في اليوم نفسه عند أعراض بولية مع حمى أو ألم خاصرة أو قيء أو حمل؛ واطلب رعاية عاجلة إذا كانت الأعراض شديدة." },
  },
  {
    slug: "iga-nephropathy-urine",
    image: "/manus-storage/iga-nephropathy-cover_79776977.jpg",
    category: { en: "Glomerular conditions", ar: "أمراض الكبيبات" },
    title: { en: "IgA nephropathy: pink urine and foam in context", ar: "اعتلال الكلية بـ IgA: البول الوردي والرغوة في سياقها" },
    excerpt: { en: "A measured introduction to a glomerular kidney condition, and why urine appearance requires testing and clinical context.", ar: "مقدمة متزنة لحالة تصيب كبيبات الكلى، ولماذا يحتاج مظهر البول إلى فحص وسياق سريري." },
    description: { en: "IgA nephropathy is a kidney condition that can be associated with blood or protein in urine. These signs are not unique to IgA nephropathy.", ar: "اعتلال الكلية بـ IgA حالة كلوية قد ترتبط بوجود دم أو بروتين في البول. وهذه العلامات ليست خاصة به وحده." },
    readingTime: { en: "5 min read", ar: "قراءة ٥ دقائق" },
    body: [
      { en: "This condition involves the kidney's filtering units. Some people may first notice pink or tea-colored urine, while others are identified through routine urine testing.", ar: "تتضمن هذه الحالة وحدات الترشيح في الكلى. قد يلاحظ بعض الأشخاص بولاً وردياً أو بلون الشاي أولاً، بينما يُكتشف الأمر لدى آخرين عبر فحص بول روتيني." },
      { en: "Only a clinical assessment can determine why blood or protein is present. Monitoring plans differ from person to person and are established with a healthcare team.", ar: "لا يحدد سبب وجود الدم أو البروتين إلا التقييم السريري. وتختلف خطط المتابعة من شخص لآخر وتوضع مع فريق صحي." },
    ],
    observe: [
      { en: "Repeated pink, red, or tea-colored urine", ar: "بول وردي أو أحمر أو بلون الشاي متكرر" },
      { en: "Persistent foam or a known kidney-health concern", ar: "رغوة مستمرة أو قلق كُلوي معروف" },
      { en: "Changes after a respiratory or other infection", ar: "تغيرات بعد عدوى تنفسية أو غيرها" },
    ],
    care: { en: "Discuss recurrent visible color changes or persistent foam with a clinician. Seek urgent care for severe symptoms, heavy bleeding, or very little urine.", ar: "ناقش تغيرات اللون المرئية المتكررة أو الرغوة المستمرة مع مختص. اطلب رعاية عاجلة للأعراض الشديدة أو النزف الغزير أو قلة البول الشديدة." },
  },
  {
    slug: "uti-symptoms-urine-color",
    image: "/manus-storage/uti-cover_bfbe8df9.jpg",
    category: { en: "Urinary health", ar: "صحة المسالك البولية" },
    title: { en: "UTI symptoms and urine color: what belongs together", ar: "أعراض التهاب المسالك ولون البول: ما الذي ينبغي النظر إليه معاً؟" },
    excerpt: { en: "How urinary symptoms, odor, cloudiness, and color can fit into a bigger picture—without relying on one visual sign.", ar: "كيف يمكن أن تتكامل الأعراض البولية والرائحة والعكارة واللون في صورة أكبر دون الاعتماد على علامة بصرية واحدة." },
    description: { en: "A urinary tract infection can affect comfort, frequency, and urine appearance. Symptoms and testing—not color alone—inform professional assessment.", ar: "قد يؤثر التهاب المسالك على الراحة وتواتر البول ومظهره. الأعراض والفحوص، لا اللون وحده، هي ما يوجه التقييم المهني." },
    readingTime: { en: "4 min read", ar: "قراءة ٤ دقائق" },
    body: [
      { en: "Cloudiness, a stronger odor, and a change in urine color can occur for many reasons. When they appear with burning, urgency, or lower abdominal discomfort, it is useful to consider prompt advice.", ar: "قد تحدث العكارة أو الرائحة الأقوى أو تغير لون البول لأسباب كثيرة. وعندما تظهر مع حرقان أو إلحاح أو انزعاج بأسفل البطن، فمن المفيد التفكير في طلب نصيحة سريعة." },
      { en: "A urine test can help a clinician assess what is happening. Hydration may affect concentration and color, but drinking water should not delay care for persistent or severe symptoms.", ar: "يمكن أن يساعد تحليل البول المختص في تقييم ما يحدث. قد يؤثر الترطيب في تركيز البول ولونه، لكن شرب الماء لا ينبغي أن يؤخر الرعاية عند الأعراض المستمرة أو الشديدة." },
    ],
    observe: [
      { en: "Burning, urgency, or needing to urinate more often", ar: "حرقان أو إلحاح أو الحاجة للتبول أكثر" },
      { en: "Cloudy urine or an unusually strong odor with symptoms", ar: "بول عكر أو رائحة قوية غير معتادة مع أعراض" },
      { en: "Fever, flank pain, or blood in urine", ar: "حمى أو ألم خاصرة أو دم في البول" },
    ],
    care: { en: "Seek professional advice for possible UTI symptoms that persist, and seek urgent care for fever, flank pain, vomiting, or severe symptoms.", ar: "اطلب نصيحة مهنية عند استمرار أعراض التهاب المسالك المحتملة، واطلب رعاية عاجلة للحمى أو ألم الخاصرة أو القيء أو الأعراض الشديدة." },
  },
];

export const urineColors = [
  { tone: "#F8F2CA", type: "typical", label: { en: "Pale straw", ar: "قشي فاتح" }, note: { en: "Often consistent with usual hydration.", ar: "غالباً ما يتماشى مع ترطيب اعتيادي." }, action: { en: "Keep observing the overall pattern.", ar: "واصل ملاحظة النمط العام." } },
  { tone: "#F4D352", type: "typical", label: { en: "Yellow", ar: "أصفر" }, note: { en: "A common shade of urine color.", ar: "درجة شائعة من لون البول." }, action: { en: "Consider your recent fluid intake and context.", ar: "ضع شربك للسوائل وسياقك الأخير في الاعتبار." } },
  { tone: "#CB852B", type: "watch", label: { en: "Deep yellow / amber", ar: "أصفر داكن / كهرماني" }, note: { en: "May occur when urine is more concentrated.", ar: "قد يحدث عندما يكون البول أكثر تركيزاً." }, action: { en: "Hydrate if appropriate for you; reassess persistent changes.", ar: "اشرب سوائل إذا كان ذلك مناسباً لك؛ وقيّم التغيرات المستمرة." } },
  { tone: "#DC7740", type: "watch", label: { en: "Orange", ar: "برتقالي" }, note: { en: "Can be affected by medicines, food, or other factors.", ar: "قد يتأثر بالأدوية أو الطعام أو عوامل أخرى." }, action: { en: "Review context and seek advice if it persists or comes with symptoms.", ar: "راجع السياق واطلب النصيحة إذا استمر أو ترافق مع أعراض." } },
  { tone: "#D46B6B", type: "care", label: { en: "Pink / red", ar: "وردي / أحمر" }, note: { en: "May reflect food pigments or blood; it needs context.", ar: "قد يعكس أصباغ الطعام أو الدم؛ ويحتاج إلى سياق." }, action: { en: "Contact a clinician, especially if unexplained or persistent.", ar: "تواصل مع مختص، خصوصاً إذا كان غير مفسر أو مستمراً." } },
  { tone: "#70402E", type: "care", label: { en: "Brown", ar: "بني" }, note: { en: "Can have several explanations, including concentration and medical causes.", ar: "له عدة تفسيرات، منها التركيز وأسباب طبية." }, action: { en: "Seek advice if persistent or paired with concerning symptoms.", ar: "اطلب النصيحة إذا استمر أو ترافق مع أعراض مقلقة." } },
  { tone: "#B8D3DD", type: "watch", label: { en: "Cloudy", ar: "عكر" }, note: { en: "May occur with crystals, infection, or other factors.", ar: "قد يحدث مع بلورات أو عدوى أو عوامل أخرى." }, action: { en: "Look at symptoms, not cloudiness in isolation.", ar: "انظر إلى الأعراض لا إلى العكارة منفردة." } },
];

export const sourceLinks = [
  { name: "Mayo Clinic — Urine color", url: "https://www.mayoclinic.org/diseases-conditions/urine-color/symptoms-causes/syc-20367333" },
  { name: "MedlinePlus — Blood in urine", url: "https://medlineplus.gov/lab-tests/blood-in-urine/" },
  { name: "National Kidney Foundation", url: "https://www.kidney.org/" },
  { name: "PubMed — Urine color chart and hydration", url: "https://pubmed.ncbi.nlm.nih.gov/16552947/" },
];
