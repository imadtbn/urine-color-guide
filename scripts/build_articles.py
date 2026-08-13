from pathlib import Path
from html import escape

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "articles"
OUT.mkdir(exist_ok=True)

ARTICLES = [
    {
        "slug": "kidney-stones-urine-color",
        "category": "صحة الكلى والمسالك",
        "title": "حصى الكلى: كيف يظهر الألم والدم في البول؟",
        "description": "شرح مبسّط لأعراض حصى الكلى، علاقتها بلون البول، ومتى تحتاج الأعراض إلى تقييم طبي عاجل.",
        "date": "14 أغسطس 2026",
        "reading": "8 دقائق",
        "about": "حصى الكلى",
        "hero_label": "حصى الكلى",
        "intro": "حصى الكلى ترسّبات صلبة تتكوّن عندما ترتفع تراكيز بعض المعادن في البول. قد تمرّ حصاة صغيرة بلا أعراض، بينما تسبب الحصاة الأكبر ألماً شديداً أو دماً في البول.",
        "toc": [("definition", "ما هي حصى الكلى؟"), ("symptoms", "الأعراض ولون البول"), ("causes", "كيف تتكوّن الحصوات؟"), ("diagnosis", "كيف يتم التشخيص؟"), ("prevention", "الوقاية"), ("emergency", "متى تستدعي الطوارئ؟"), ("faq", "أسئلة شائعة"), ("sources", "المصادر")],
        "body": """
<h2 id="definition">ما هي حصى الكلى؟</h2>
<p>الحصاة قطعة صلبة شبيهة بالحصى تتكوّن في كلية واحدة أو كلتيهما عندما تصبح بعض المعادن في البول مركّزة بدرجة تسمح بتكوين بلورات. لا تعني كل حصاة وجود فشل كلوي، لكن انسداد مسار البول أو ترافقها مع التهاب قد يسبب مضاعفات.</p>
<div class="pull-quote">قد تكون الحصاة صغيرة ولا تسبب أي عرض، لكن ألم الخاصرة المتقطع مع دم في البول يستحق تقييماً طبياً.</div>
<h2 id="symptoms">الأعراض ولون البول</h2>
<p>يظهر ألم حصى الكلى غالباً في الظهر أو الخاصرة، وقد يمتد إلى أسفل البطن أو المغبن. يمكن أن يظهر البول وردياً أو أحمر أو بنياً بسبب وجود دم، وقد يكون الدم مجهرياً لا يُرى بالعين. لا يكفي لون البول وحده لتأكيد الحصاة، لأن الالتهاب وأسباباً أخرى قد تسبب التغير نفسه.</p>
<div class="key-takeaways"><div><strong>الألم:</strong> قد يأتي على شكل موجات ويتغير مكانه مع تحرك الحصاة.</div><div><strong>التبول:</strong> قد يحدث تكرار أو إلحاح أو ألم إذا اقتربت الحصاة من المثانة.</div><div><strong>المظهر:</strong> الدم في البول يحتاج تقييماً، حتى لو اختفى سريعاً.</div></div>
<h2 id="causes">كيف تتكوّن الحصوات؟</h2>
<p>يتأثر تكوّن الحصوات بكمية السوائل، وتركيز المعادن، وبعض العادات الغذائية والعوامل الوراثية. ومن المهم معرفة أن شرب الماء يساعد على تقليل التركيز، لكن الكمية المناسبة تختلف بين الأشخاص، خصوصاً لدى من لديهم أمراض قلب أو كلى.</p>
<ul><li>قلة شرب السوائل أو فقدانها مع التعرق أو القيء.</li><li>ارتفاع الصوديوم أو بعض المعادن في النظام الغذائي.</li><li>تاريخ شخصي أو عائلي لحصى الكلى.</li><li>بعض الحالات الطبية أو الأدوية التي تغيّر تركيب البول.</li></ul>
<h2 id="diagnosis">كيف يتم التشخيص؟</h2>
<p>يعتمد الطبيب على القصة المرضية والفحص، ثم قد يطلب تحليل البول والدم وصوراً مثل التصوير بالموجات فوق الصوتية أو التصوير المقطعي بحسب الحالة. تساعد هذه الفحوص على تحديد مكان الحصاة وحجمها ومعرفة وجود انسداد أو التهاب.</p>
<div class="info-box"><strong>معلومة مهمة</strong>لا تحاول تشخيص الحصاة من لون البول وحده. وجود الدم قد تكون له أسباب أخرى، لذلك يُفضّل تقييمه طبياً خاصة إذا تكرر.</div>
<h2 id="prevention">الوقاية وتقليل التكرار</h2>
<p>تتضمن الوقاية عادةً شرب سوائل كافية ما لم يوصِ الطبيب بغير ذلك، وتقليل الملح، ومراجعة النظام الغذائي بناءً على نوع الحصاة ونتائج التحاليل. قد يحتاج بعض المرضى إلى أدوية وقائية، ولا ينبغي البدء بها دون وصفة.</p>
<h2 id="emergency">متى تستدعي الأعراض الطوارئ؟</h2>
<div class="emergency-box"><div><strong>اطلب مساعدة عاجلة إذا ظهر:</strong> ألم شديد لا يهدأ، حمى أو قشعريرة، قيء متكرر، صعوبة أو انقطاع في التبول، أو ألم مع بول دموي. اجتماع الانسداد مع العدوى قد يكون حالة طارئة.</div></div>
<h2 id="faq">أسئلة شائعة</h2>
<div class="faq-list"><div class="faq-item"><details><summary>هل كل دم في البول يعني وجود حصاة؟</summary><p>لا. قد يرتبط الدم بالتهاب أو تضخم البروستاتا أو أمراض الكلى أو أسباب أخرى، ولذلك يحتاج إلى تقييم عند ظهوره.</p></details></div><div class="faq-item"><details><summary>هل يمكن أن تمر الحصاة دون ألم؟</summary><p>نعم، بعض الحصوات الصغيرة لا تسبب أعراضاً وتُكتشف مصادفة أو أثناء الفحوص.</p></details></div><div class="faq-item"><details><summary>هل شرب الماء يذيب كل الحصوات؟</summary><p>الماء يساعد على الوقاية ومرور بعض الحصوات الصغيرة، لكنه لا يذيب كل الأنواع ولا يغني عن تقييم الطبيب.</p></details></div></div>
<h2 id="sources">المصادر الطبية</h2>
<ul class="source-list"><li><a href="https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones" target="_blank" rel="noopener">المعهد الوطني للسكري وأمراض الهضم والكلى (NIDDK): Kidney Stones</a></li><li><a href="https://www.niddk.nih.gov/health-information/urologic-diseases/hematuria-blood-urine" target="_blank" rel="noopener">NIDDK: الدم في البول (Hematuria)</a></li><li><a href="https://www.nhs.uk/conditions/kidney-stones/" target="_blank" rel="noopener">NHS: Kidney stones</a></li></ul>
<div class="article-disclaimer"><strong>تنبيه:</strong> هذه الصفحة للتثقيف الصحي ولا تشخّص الحالة ولا تستبدل استشارة الطبيب.</div>
""",
        "sources": ["NIDDK", "NHS", "MedlinePlus"],
    },
    {
        "slug": "blood-in-urine-hematuria",
        "category": "علامات البول المهمة",
        "title": "الدم في البول: الأسباب التي لا ينبغي تجاهلها",
        "description": "ما معنى البول الوردي أو الأحمر أو البني؟ دليل تثقيفي عن البيلة الدموية وأسبابها والفحوص التي قد يطلبها الطبيب.",
        "date": "14 أغسطس 2026", "reading": "8 دقائق", "about": "البيلة الدموية",
        "hero_label": "دم في البول",
        "intro": "البيلة الدموية تعني وجود دم في البول. قد يكون الدم مرئياً فيغيّر اللون، أو مجهرياً لا يظهر إلا في تحليل البول؛ وفي الحالتين يعتمد السبب على القصة المرضية والفحص.",
        "toc": [("definition", "ما هي البيلة الدموية؟"), ("colors", "الألوان المحتملة"), ("causes", "الأسباب الشائعة"), ("evaluation", "كيف يتم التقييم؟"), ("urgent", "متى تكون عاجلة؟"), ("faq", "أسئلة شائعة"), ("sources", "المصادر")],
        "body": """
<h2 id="definition">ما هي البيلة الدموية؟</h2>
<p>البيلة الدموية المرئية تجعل البول وردياً أو أحمر أو بنياً، بينما تُكتشف البيلة الدموية المجهرية بالمجهر أو شريط الفحص. قد تكفي كمية صغيرة من الدم لتغيير اللون، ولا يعني غياب الألم أن السبب بسيط.</p>
<h2 id="colors">الألوان المحتملة</h2>
<table><thead><tr><th>المظهر</th><th>ما قد يعنيه</th><th>الخطوة المناسبة</th></tr></thead><tbody><tr><td>وردي أو أحمر</td><td>دم، أو أطعمة وأدوية معينة أحياناً</td><td>فحص طبي إذا لم يوجد تفسير واضح</td></tr><tr><td>بني أو بلون الشاي</td><td>دم قديم أو أسباب أخرى مثل الجفاف الشديد</td><td>تقييم خاصة عند استمرار اللون</td></tr><tr><td>لون طبيعي مع تحليل إيجابي</td><td>بيلة دموية مجهرية</td><td>متابعة نتائج التحليل مع الطبيب</td></tr></tbody></table>
<h2 id="causes">الأسباب الشائعة</h2>
<p>من الأسباب الممكنة التهاب المثانة أو الكلى أو الإحليل، حصى المسالك، إصابة أو إجراء حديث في الجهاز البولي، تضخم البروستاتا، بعض الأدوية، والجهد البدني الشديد. وقد توجد أسباب أقل شيوعاً وأكثر أهمية مثل أمراض الكبيبات أو أورام الجهاز البولي.</p>
<div class="info-box"><strong>لا تعتمد على اللون فقط</strong>قد تتشابه ألوان البول الناتجة عن الطعام أو الأدوية مع الدم. تحليل البول هو الطريق الأول لتأكيد وجود كريات الدم الحمراء.</div>
<h2 id="evaluation">كيف يتم التقييم؟</h2>
<p>يبدأ التقييم بسؤال الطبيب عن الألم، الالتهاب، الأدوية، الدورة الشهرية، الإصابات، والتاريخ العائلي. قد يشمل تحليل البول، وإعادة العينة عند الحاجة، وتحاليل الدم، والتصوير، أو تنظير المثانة بحسب العمر والأعراض وعوامل الخطورة.</p>
<ul><li>اذكر للطبيب أي مميعات للدم أو مسكنات تتناولها.</li><li>أخبره إن كانت العينة جُمعت أثناء الدورة الشهرية.</li><li>لا تؤجل الفحص لأن اللون عاد إلى طبيعته بعد يوم واحد.</li></ul>
<h2 id="urgent">متى تكون الحالة عاجلة؟</h2>
<div class="emergency-box"><div><strong>اطلب الرعاية سريعاً إذا:</strong> ترافق البول الدموي مع خثرات تمنع التبول، ألم شديد، حمى وقشعريرة، دوخة أو ضعف واضح، أو إذا كان النزف متكرراً أو غزيراً.</div></div>
<h2 id="faq">أسئلة شائعة</h2>
<div class="faq-list"><div class="faq-item"><details><summary>هل البول الأحمر بعد الشمندر يعني وجود دم؟</summary><p>قد تغيّر بعض الأطعمة لون البول، لكن لا يمكن الجزم بالعين. إذا تكرر اللون أو ترافق مع أعراض، يُنصح بإجراء تحليل.</p></details></div><div class="faq-item"><details><summary>هل البيلة الدموية المؤلمة أخطر من غير المؤلمة؟</summary><p>الألم قد يوجه إلى حصاة أو التهاب، لكن البيلة غير المؤلمة لا ينبغي إهمالها أيضاً؛ فكلاهما يحتاج إلى تقييم مناسب.</p></details></div><div class="faq-item"><details><summary>ما الفحص الأول عادةً؟</summary><p>تحليل البول يساعد على تأكيد وجود الدم وكشف مؤشرات الالتهاب أو البروتين، ثم يحدد الطبيب الفحوص الإضافية.</p></details></div></div>
<h2 id="sources">المصادر الطبية</h2>
<ul class="source-list"><li><a href="https://www.niddk.nih.gov/health-information/urologic-diseases/hematuria-blood-urine" target="_blank" rel="noopener">NIDDK: Hematuria (Blood in the Urine)</a></li><li><a href="https://www.auanet.org/guidelines-and-quality/guidelines/microhematuria" target="_blank" rel="noopener">American Urological Association: Microhematuria Guideline</a></li><li><a href="https://medlineplus.gov/urinalysis.html" target="_blank" rel="noopener">MedlinePlus: Urinalysis</a></li></ul>
<div class="article-disclaimer"><strong>تنبيه:</strong> ظهور الدم في البول ليس تشخيصاً بحد ذاته، ويحتاج إلى تقييم السبب.</div>
""",
        "sources": ["NIDDK", "AUA", "MedlinePlus"],
    },
    {
        "slug": "chronic-kidney-disease-urine-signs",
        "category": "صحة الكلى",
        "title": "مرض الكلى المزمن: لماذا قد تتأخر الأعراض؟",
        "description": "علامات مرتبطة بالبول وعوامل الخطورة والفحوص الأساسية التي تساعد على اكتشاف مرض الكلى المزمن مبكراً.",
        "date": "14 أغسطس 2026", "reading": "9 دقائق", "about": "مرض الكلى المزمن",
        "hero_label": "صحة الكلى",
        "intro": "مرض الكلى المزمن يتطور ببطء وقد يمرّ دون أعراض واضحة في بدايته. لذلك تساعد معرفة عوامل الخطورة وفحص الدم والبول على اكتشافه قبل حدوث مضاعفات متقدمة.",
        "toc": [("definition", "ما هو مرض الكلى المزمن؟"), ("urine", "ما علاقة البول؟"), ("risk", "عوامل الخطورة"), ("tests", "الفحوص الأساسية"), ("protect", "حماية الكلى"), ("urgent", "متى أطلب المساعدة؟"), ("faq", "أسئلة شائعة"), ("sources", "المصادر")],
        "body": """
<h2 id="definition">ما هو مرض الكلى المزمن؟</h2>
<p>هو تضرر أو انخفاض في وظيفة الكلى يستمر ثلاثة أشهر أو أكثر. للكلى أدوار متعددة، منها طرح الفضلات والماء الزائد، والمساعدة في توازن المعادن وضغط الدم وصنع كريات الدم الحمراء.</p>
<div class="pull-quote">غياب الأعراض لا يثبت سلامة الكلى؛ فالاكتشاف المبكر يعتمد غالباً على تحاليل الدم والبول لدى الأشخاص المعرضين للخطر.</div>
<h2 id="urine">ما علاقة البول؟</h2>
<p>قد يلاحظ بعض المرضى بولاً رغوياً، أو تغيراً في عدد مرات التبول، أو تورماً في الساقين والجفنين. هذه العلامات غير نوعية وقد تحدث لأسباب أخرى، لكن استمرارها يستحق مناقشة الطبيب. لا يكشف لون البول وحده معظم حالات مرض الكلى المزمن.</p>
<div class="key-takeaways"><div><strong>البول الرغوي المتكرر:</strong> قد يرتبط بالبروتين في البول ويحتاج إلى فحص.</div><div><strong>التورم:</strong> قد ينتج عن احتباس السوائل، وله أسباب متعددة.</div><div><strong>التحاليل:</strong> هي الأدق لتقييم الوظيفة وتسرب الألبومين.</div></div>
<h2 id="risk">عوامل الخطورة</h2>
<p>يزداد خطر مرض الكلى المزمن لدى المصابين بالسكري أو ارتفاع ضغط الدم أو أمراض القلب، ومن لديهم تاريخ عائلي أو شخصي لإصابة كلوية حادة، إضافة إلى بعض الأمراض المناعية والوراثية وحصى الكلى المتكررة.</p>
<h2 id="tests">الفحوص الأساسية</h2>
<p>يستخدم الأطباء عادةً فحص دم يسمى معدل الترشيح الكبيبي المقدّر (eGFR) لتقدير قدرة الكلى على الترشيح، وفحص بول يسمى نسبة الألبومين إلى الكرياتينين (uACR) للبحث عن تسرب الألبومين. تفسير النتائج يعتمد على التكرار والمدة والسياق الصحي، وليس على قراءة منفردة فقط.</p>
<table><thead><tr><th>الفحص</th><th>ما الذي يقدّره؟</th></tr></thead><tbody><tr><td>eGFR</td><td>مدى كفاءة ترشيح الفضلات من الدم</td></tr><tr><td>uACR</td><td>كمية الألبومين المتسرب إلى البول</td></tr></tbody></table>
<h2 id="protect">حماية الكلى</h2>
<ul><li>ضبط ضغط الدم والسكري مع الفريق الطبي.</li><li>عدم الإفراط في مسكنات NSAIDs مثل الإيبوبروفين أو النابروكسين دون سؤال الطبيب، خاصة عند وجود مرض كلوي.</li><li>اتباع نمط غذائي مناسب للحالة، مع الانتباه إلى الملح والاحتياجات الفردية.</li><li>الامتناع عن التدخين والحفاظ على نشاط بدني مناسب.</li></ul>
<h2 id="urgent">متى أطلب المساعدة؟</h2>
<div class="emergency-box"><div><strong>تواصل مع الطبيب عاجلاً إذا:</strong> انخفض البول بشدة أو انقطع، ظهر تورم سريع أو ضيق نفس، حدث قيء مستمر، أو ترافق البول الدموي مع ألم أو حمى.</div></div>
<h2 id="faq">أسئلة شائعة</h2>
<div class="faq-list"><div class="faq-item"><details><summary>هل البول الرغوي يعني مرضاً كلوياً؟</summary><p>ليس دائماً؛ قد يتأثر بسرعة التبول أو تركيز البول. لكن الرغوة المتكررة قد تستدعي فحص البروتين في البول.</p></details></div><div class="faq-item"><details><summary>هل يستطيع لون البول كشف مرض الكلى المزمن؟</summary><p>غالباً لا. قد يكون اللون طبيعياً رغم وجود مشكلة، لذلك يعتمد الاكتشاف على تحاليل الدم والبول.</p></details></div><div class="faq-item"><details><summary>من يحتاج إلى الفحص؟</summary><p>يحدد الطبيب ذلك وفق السكري وضغط الدم والتاريخ العائلي والأعراض وعوامل الخطر الأخرى.</p></details></div></div>
<h2 id="sources">المصادر الطبية</h2>
<ul class="source-list"><li><a href="https://www.kidney.org/kidney-topics/chronic-kidney-disease-ckd" target="_blank" rel="noopener">National Kidney Foundation: Chronic Kidney Disease</a></li><li><a href="https://medlineplus.gov/lab-tests/protein-in-urine/" target="_blank" rel="noopener">MedlinePlus: Protein in Urine</a></li><li><a href="https://www.niddk.nih.gov/health-information/kidney-disease" target="_blank" rel="noopener">NIDDK: Kidney Disease</a></li></ul>
<div class="article-disclaimer"><strong>تنبيه:</strong> لا تُفسَّر أرقام eGFR أو uACR بشكل منفرد؛ اطلب من الطبيب شرح نتائجك في سياقك الصحي.</div>
""",
        "sources": ["NKF", "MedlinePlus", "NIDDK"],
    },
    {
        "slug": "foamy-urine-proteinuria",
        "category": "تحليل البول",
        "title": "البول الرغوي والبروتين: متى يحتاج إلى فحص؟",
        "description": "الفرق بين الرغوة العابرة والبروتين في البول، وما الذي تكشفه تحاليل البول عن صحة الكلى.",
        "date": "14 أغسطس 2026", "reading": "7 دقائق", "about": "البيلة البروتينية",
        "hero_label": "البول الرغوي",
        "intro": "قد تظهر رغوة في المرحاض لأسباب بسيطة، لكن الرغوة المتكررة أو المصحوبة بتورم قد تشير إلى وجود بروتين في البول. لا يمكن تأكيد ذلك بالملاحظة وحدها.",
        "toc": [("meaning", "ماذا يعني البول الرغوي؟"), ("protein", "ما هي البيلة البروتينية؟"), ("causes", "أسباب مؤقتة ومستمرة"), ("testing", "الفحوص"), ("when", "متى أراجع الطبيب؟"), ("faq", "أسئلة شائعة"), ("sources", "المصادر")],
        "body": """
<h2 id="meaning">ماذا يعني البول الرغوي؟</h2>
<p>قد تتكوّن فقاعات بسبب سرعة تدفق البول أو مواد التنظيف أو تركيز البول. لذلك لا تعني الرغوة وحدها وجود مرض. ما يهم هو تكرارها، ووجود تورم أو دم في البول أو تغير في كمية التبول.</p>
<h2 id="protein">ما هي البيلة البروتينية؟</h2>
<p>البيلة البروتينية هي وجود كمية أكبر من المعتاد من البروتين في البول. تقوم مرشحات الكلى عادةً بحجز البروتينات الكبيرة داخل الدم، وقد يدل تسربها المستمر على تأذي هذه المرشحات أو على حالة أخرى تحتاج إلى تقييم.</p>
<div class="info-box"><strong>القاعدة الأهم</strong>المظهر يلفت الانتباه، لكن التحليل هو الذي يحدد وجود البروتين ودرجته واستمراره.</div>
<h2 id="causes">أسباب مؤقتة ومستمرة</h2>
<p>قد يرتفع البروتين مؤقتاً بعد مجهود شديد أو مع الجفاف أو التوتر أو الحمل. أما استمرار الارتفاع فقد يرتبط بمرض الكلى أو السكري أو ارتفاع ضغط الدم أو بعض الحالات الالتهابية، ويحتاج إلى إعادة التقييم والتقصي.</p>
<ul><li>لا تكثر شرب الماء قسراً بهدف إزالة الرغوة.</li><li>دوّن وجود تورم في القدمين أو حول العينين.</li><li>اذكر للطبيب إصابتك بالسكري أو ارتفاع الضغط أو وجود تاريخ عائلي.</li></ul>
<h2 id="testing">الفحوص التي قد يطلبها الطبيب</h2>
<p>قد يبدأ التقييم بتحليل بول، ثم يُطلب قياس نسبة الألبومين إلى الكرياتينين أو جمع بول 24 ساعة في حالات مختارة. قد تُضاف تحاليل الدم لتقييم وظيفة الكلى، ويُفسَّر كل ذلك حسب العمر والأعراض والأدوية.</p>
<table><thead><tr><th>الملاحظة</th><th>ما الذي قد يساعد على توضيحه؟</th></tr></thead><tbody><tr><td>رغوة متكررة</td><td>فحص البروتين والألبومين في البول</td></tr><tr><td>رغوة مع تورم</td><td>تقييم السوائل ووظيفة الكلى وأسباب أخرى</td></tr><tr><td>رغوة عابرة بعد الجهد</td><td>قد تكون مؤقتة، لكن القرار يعتمد على التحليل</td></tr></tbody></table>
<h2 id="when">متى أراجع الطبيب؟</h2>
<div class="emergency-box"><div><strong>لا تؤجل التقييم إذا:</strong> استمرت الرغوة أياماً أو أسابيع، أو ظهرت مع تورم، دم في البول، ضيق نفس، نقص واضح في البول، أو ارتفاع شديد في ضغط الدم.</div></div>
<h2 id="faq">أسئلة شائعة</h2>
<div class="faq-list"><div class="faq-item"><details><summary>هل أستطيع تشخيص البروتين في المنزل؟</summary><p>توجد شرائط منزلية، لكنها لا تغني عن أخذ عينة صحيحة وتفسير النتيجة طبياً، خصوصاً عند تكررها.</p></details></div><div class="faq-item"><details><summary>هل الجفاف يسبب رغوة؟</summary><p>قد يجعل البول أكثر تركيزاً ويغير مظهره، وقد يرفع البروتين مؤقتاً، لكن استمرار العلامة يحتاج إلى فحص.</p></details></div><div class="faq-item"><details><summary>هل كل بروتين في البول يعني فشلاً كلوياً؟</summary><p>لا. قد يكون مؤقتاً أو بسيطاً، وتحتاج دلالته إلى معرفة الكمية والتكرار ووظيفة الكلى وعوامل الخطر.</p></details></div></div>
<h2 id="sources">المصادر الطبية</h2>
<ul class="source-list"><li><a href="https://medlineplus.gov/lab-tests/protein-in-urine/" target="_blank" rel="noopener">MedlinePlus: Protein in Urine</a></li><li><a href="https://www.kidney.org/kidney-topics/albuminuria-proteinuria" target="_blank" rel="noopener">National Kidney Foundation: Albuminuria / Proteinuria</a></li><li><a href="https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/tests-diagnosis/albuminuria-albumin-urine" target="_blank" rel="noopener">NIDDK: Albuminuria</a></li></ul>
<div class="article-disclaimer"><strong>تنبيه:</strong> لا تستخدم شكل البول بديلاً عن تحليل مخبري أو استشارة طبية.</div>
""",
        "sources": ["MedlinePlus", "NKF", "NIDDK"],
    },
    {
        "slug": "kidney-infection-pyelonephritis",
        "category": "التهابات المسالك",
        "title": "التهاب الكلى: كيف يختلف عن التهاب المثانة؟",
        "description": "علامات انتقال العدوى إلى الكلى، الفرق بين التهاب المثانة والتهاب الحويضة والكلية، ومتى يلزم العلاج العاجل.",
        "date": "14 أغسطس 2026", "reading": "8 دقائق", "about": "التهاب الكلى",
        "hero_label": "التهاب الكلى",
        "intro": "قد يبدأ التهاب الكلى كعدوى في المثانة ثم يصعد عبر الحالبين. التعرف على الحمى وألم الخاصرة والقيء يساعد على طلب الرعاية قبل حدوث مضاعفات.",
        "toc": [("definition", "ما هو التهاب الكلى؟"), ("difference", "الفرق عن التهاب المثانة"), ("symptoms", "الأعراض"), ("diagnosis", "التشخيص والعلاج"), ("prevention", "الوقاية"), ("urgent", "متى تكون طارئة؟"), ("faq", "أسئلة شائعة"), ("sources", "المصادر")],
        "body": """
<h2 id="definition">ما هو التهاب الكلى؟</h2>
<p>التهاب الكلى أو التهاب الحويضة والكلية نوع من عدوى المسالك يبدأ غالباً في المثانة ثم ينتقل إلى كلية واحدة أو كلتيهما. يسببه غالباً نوع من البكتيريا، وقد يؤدي عدم علاجه إلى مشكلات خطيرة في حالات قليلة.</p>
<h2 id="difference">الفرق عن التهاب المثانة</h2>
<table><thead><tr><th>الموضع</th><th>أعراض أكثر شيوعاً</th><th>مستوى الانتباه</th></tr></thead><tbody><tr><td>المثانة</td><td>حرقان، تكرار، إلحاح، ضغط أسفل البطن</td><td>يحتاج تقييماً وعلاجاً مناسباً</td></tr><tr><td>الكلية</td><td>حمى، قشعريرة، ألم الخاصرة، غثيان أو قيء</td><td>يحتاج تواصلاً طبياً سريعاً</td></tr></tbody></table>
<h2 id="symptoms">الأعراض ومظهر البول</h2>
<p>قد يترافق التهاب الكلى مع ألم أو حرقان عند التبول، بول عكر أو دموي أو ذي رائحة قوية، إضافة إلى حمى وقشعريرة وألم في الظهر أو الجانب. لكن غياب تغير اللون لا ينفي الالتهاب، كما أن اللون وحده لا يحدد موضع العدوى.</p>
<div class="pull-quote">الحمى مع ألم الخاصرة أو القيء ليست مجرد تغير في لون البول؛ قد تكون علامة على وصول العدوى إلى الكلى.</div>
<h2 id="diagnosis">التشخيص والعلاج</h2>
<p>يسأل الطبيب عن الأعراض ويفحص المريض وقد يطلب تحليل البول ومزرعة البول وتحاليل الدم أو التصوير عند الحاجة. تُستخدم المضادات الحيوية بوصفة طبية، وقد يحتاج بعض المرضى إلى العلاج في المستشفى. يجب تناول الدواء كما وُصف وعدم مشاركة المضادات أو حفظها لمرض لاحق.</p>
<h2 id="prevention">الوقاية وتقليل المضاعفات</h2>
<ul><li>اشرب سوائل مناسبة لك ما لم يمنع الطبيب ذلك.</li><li>لا تؤجل التبول طويلاً، واطلب المشورة عند تكرر الالتهاب.</li><li>أكمل المضاد الحيوي الموصوف، ولا تستخدم بقايا وصفة قديمة.</li><li>انتبه أكثر إذا كنت حاملاً أو لديك سكري أو قسطرة أو ضعف مناعة.</li></ul>
<h2 id="urgent">متى تكون طارئة؟</h2>
<div class="emergency-box"><div><strong>اذهب للطوارئ أو اتصل بالطبيب سريعاً عند:</strong> حمى وقشعريرة، ألم شديد في الخاصرة أو الظهر، قيء يمنع شرب السوائل، تشوش، ضعف شديد، أو تدهور سريع.</div></div>
<h2 id="faq">أسئلة شائعة</h2>
<div class="faq-list"><div class="faq-item"><details><summary>هل كل التهاب مثانة يصعد إلى الكلى؟</summary><p>لا، لكن بعض العدوى قد تمتد إذا لم تُقيّم أو تُعالج، لذلك لا ينبغي تجاهل الأعراض الشديدة أو المستمرة.</p></details></div><div class="faq-item"><details><summary>هل شرب الماء يعالج التهاب الكلى؟</summary><p>السوائل قد تساعد على الترطيب، لكنها لا تستبدل التقييم والمضاد الحيوي عند الحاجة.</p></details></div><div class="faq-item"><details><summary>هل البول العكر يكفي لتشخيص العدوى؟</summary><p>لا. قد ينتج العكر عن الجفاف أو البلورات أو أسباب أخرى، ويحتاج التشخيص إلى تقييم وتحليل.</p></details></div></div>
<h2 id="sources">المصادر الطبية</h2>
<ul class="source-list"><li><a href="https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-infection-pyelonephritis" target="_blank" rel="noopener">NIDDK: Kidney Infection (Pyelonephritis)</a></li><li><a href="https://www.cdc.gov/uti/about/index.html" target="_blank" rel="noopener">CDC: Urinary Tract Infection Basics</a></li><li><a href="https://www.nhs.uk/conditions/urinary-tract-infections-utis/" target="_blank" rel="noopener">NHS: Urinary tract infections</a></li></ul>
<div class="article-disclaimer"><strong>تنبيه:</strong> التهاب الكلى يحتاج إلى تقييم طبي، ولا ينبغي علاجه ذاتياً بالمضادات.</div>
""",
        "sources": ["NIDDK", "CDC", "NHS"],
    },
    {
        "slug": "iga-nephropathy-urine",
        "category": "أمراض الكبيبات",
        "title": "اعتلال الكلية بـ IgA: البول الوردي والرغوي",
        "description": "مقدمة تثقيفية عن اعتلال الكلية بـ IgA، ولماذا قد يظهر الدم أو البروتين في البول، وكيف يتم التقييم.",
        "date": "14 أغسطس 2026", "reading": "8 دقائق", "about": "اعتلال الكلية بـ IgA",
        "hero_label": "IgA الكلوية",
        "intro": "اعتلال الكلية بـ IgA مرض مناعي قد يسبب التهاباً في مرشحات الكلى وتسرب الدم والبروتين إلى البول. لا تكفي الأعراض وحدها للتشخيص، لكنها تساعد على معرفة متى يلزم الفحص.",
        "toc": [("what", "ما هو اعتلال IgA؟"), ("urine", "ماذا قد يظهر في البول؟"), ("symptoms", "الأعراض"), ("diagnosis", "كيف يتم التشخيص؟"), ("management", "المتابعة والعلاج"), ("urgent", "علامات الخطر"), ("faq", "أسئلة شائعة"), ("sources", "المصادر")],
        "body": """
<h2 id="what">ما هو اعتلال الكلية بـ IgA؟</h2>
<p>هو مرض مناعي تترسب فيه تجمعات من الغلوبولين المناعي A داخل الكلى، ما يسبب التهاباً وتضرراً في الكبيبات، وهي أوعية دقيقة ترشح الدم. قد يتطور ببطء وقد لا تظهر علامات لسنوات.</p>
<h2 id="urine">ماذا قد يظهر في البول؟</h2>
<p>عندما تتأثر الكبيبات قد يتسرب الدم فيظهر البول وردياً أو بلون الكولا، وقد يتسرب البروتين فيبدو البول رغوياً. هذه العلامات مشتركة مع أمراض عديدة ولا تثبت اعتلال IgA وحده.</p>
<div class="key-takeaways"><div><strong>دم مرئي:</strong> قد يظهر بعد عدوى تنفسية عند بعض الأشخاص.</div><div><strong>بروتين:</strong> قد يكون غير مرئي ويُكتشف بتحليل البول.</div><div><strong>تورم:</strong> قد يحدث مع احتباس السوائل ويحتاج إلى تقييم.</div></div>
<h2 id="symptoms">الأعراض والعوامل المصاحبة</h2>
<p>قد تشمل الأعراض البول الوردي أو بلون الكولا، البول الرغوي، وتورم الساقين أو الكاحلين. وقد توجد زيادة في ضغط الدم أو نتائج غير طبيعية في تحاليل الكلى. لا يعني وجود عرض واحد أن المرض موجود.</p>
<h2 id="diagnosis">كيف يتم التشخيص؟</h2>
<p>يشمل التقييم التاريخ المرضي والفحص وتحاليل الدم والبول لمعرفة وظيفة الكلى وكمية البروتين. قد يحتاج الطبيب إلى خزعة كلوية لتأكيد وجود ترسبات IgA وتقدير درجة الضرر وتوجيه العلاج.</p>
<h2 id="management">المتابعة والعلاج</h2>
<p>يحدد اختصاصي الكلى الخطة حسب ضغط الدم وكمية البروتين ووظيفة الكلى. قد تشمل الخطة أدوية لتقليل ضغط الدم وتسرب البروتين، وتعديلات على الملح والتدخين ونمط الحياة. لا تبدأ أو توقف دواءً بسبب تغير لون البول دون مراجعة الطبيب.</p>
<h2 id="urgent">علامات تستحق تواصلاً عاجلاً</h2>
<div class="emergency-box"><div><strong>اطلب المساعدة سريعاً عند:</strong> انخفاض شديد في البول، تورم سريع أو ضيق نفس، صداع شديد مع ضغط مرتفع، دم متكرر أو خثرات، أو تدهور عام.</div></div>
<h2 id="faq">أسئلة شائعة</h2>
<div class="faq-list"><div class="faq-item"><details><summary>هل كل بول بلون الكولا يعني اعتلال IgA؟</summary><p>لا. قد يحدث اللون مع أسباب أخرى، منها الدم أو الجفاف أو أمراض الكبد، ويحتاج إلى تحليل وتقييم.</p></details></div><div class="faq-item"><details><summary>هل اعتلال IgA معدٍ؟</summary><p>لا، هو مرض مناعي وليس عدوى تنتقل بين الأشخاص.</p></details></div><div class="faq-item"><details><summary>هل يمكن الوقاية منه؟</summary><p>لا توجد طريقة مؤكدة لمنعه، لكن المتابعة المبكرة وضبط الضغط والبروتين يساعدان على حماية وظيفة الكلى.</p></details></div></div>
<h2 id="sources">المصادر الطبية</h2>
<ul class="source-list"><li><a href="https://www.niddk.nih.gov/health-information/kidney-disease/iga-nephropathy" target="_blank" rel="noopener">NIDDK: IgA Nephropathy</a></li><li><a href="https://kdigo.org/guidelines/gd/" target="_blank" rel="noopener">KDIGO: Glomerular Diseases Guideline</a></li><li><a href="https://www.kidney.org/kidney-topics/hematuria" target="_blank" rel="noopener">National Kidney Foundation: Hematuria</a></li></ul>
<div class="article-disclaimer"><strong>تنبيه:</strong> هذا شرح عام، وتشخيص أمراض الكبيبات يحتاج إلى فحوص يحددها اختصاصي الكلى.</div>
""",
        "sources": ["NIDDK", "KDIGO", "NKF"],
    },
]


def svg(label):
    return f'''<svg class="hero-illustration" viewBox="0 0 880 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="رسم توضيحي عن {escape(label)}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1e88e5"/><stop offset="1" stop-color="#0f4c81"/></linearGradient></defs><rect width="880" height="300" rx="20" fill="url(#g)"/><circle cx="120" cy="45" r="110" fill="#4caf50" opacity=".15"/><circle cx="770" cy="260" r="130" fill="#ffc107" opacity=".12"/><path d="M335 70c-45-5-62 40-48 82 11 33 33 42 33 75 0 26-22 37-8 57 17 23 49 3 49-25V91c0-13-10-20-26-21Z" fill="#fff" opacity=".93"/><path d="M545 70c45-5 62 40 48 82-11 33-33 42-33 75 0 26 22 37 8 57-17 23-49 3-49-25V91c0-13 10-20 26-21Z" fill="#fff" opacity=".93"/><path d="M350 220c15 24 45 31 78 49M530 220c-15 24-45 31-78 49" stroke="#fff" stroke-width="6" fill="none" opacity=".8"/><ellipse cx="440" cy="274" rx="62" ry="24" fill="#fff" opacity=".95"/><text x="440" y="280" text-anchor="middle" font-family="Cairo,sans-serif" font-size="20" font-weight="700" fill="#0f4c81">{escape(label)}</text></svg>'''


def shell(a):
    nav = '''<a href="../index.html#colors">دليل الألوان</a><a href="../index.html#compare">المقارنة</a><a href="../index.html#hydration">الترطيب</a><a href="../index.html#faq">الأسئلة الشائعة</a><a href="../articles.html" aria-current="page">المقالات</a><a href="../index.html#contact">اتصل بنا</a>'''
    toc = ''.join(f'<li><a href="#{i}">{escape(t)}</a></li>' for i, t in a['toc'])
    related = ''.join(f'<a class="related-card" href="../articles.html"><span class="article-category">{escape(x)}</span><h3>{escape(y)}</h3><p>{escape(z)}</p></a>' for x, y, z in [('التهابات المسالك','التهابات المسالك البولية: الأعراض ولون البول','تعرف على علاقة العدوى برائحة البول ووضوحه.'),('الترطيب','الجفاف وتأثيره على لون البول','كيف يغيّر نقص السوائل تركيز البول ومظهره؟'),('دليل الألوان','استكشف دليل ألوان البول','ارجع إلى الدليل الرئيسي لفهم الألوان بالتفصيل.')])
    sources = ''.join(f'<span>{escape(s)}</span>' for s in a['sources'])
    return f'''<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>{escape(a['title'])} | دليل ألوان البول</title><meta name="description" content="{escape(a['description'])}"><meta name="author" content="فريق دليل ألوان البول"><meta name="robots" content="index, follow"><meta name="theme-color" content="#0F4C81"><link rel="canonical" href="https://imadtbn.github.io/urine-color-guide/articles/{a['slug']}.html"><link rel="icon" href="../favicon.ico" sizes="any"><link rel="manifest" href="../manifest.webmanifest"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@500;700;900&family=Tajawal:wght@400;500;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="../assets/css/style.css"><link rel="stylesheet" href="../assets/css/responsive.css"><link rel="stylesheet" href="../assets/css/article.css"><script type="application/ld+json">{{"@context":"https://schema.org","@type":"MedicalWebPage","headline":"{escape(a['title'])}","description":"{escape(a['description'])}","url":"https://imadtbn.github.io/urine-color-guide/articles/{a['slug']}.html","inLanguage":"ar","dateModified":"2026-08-14","author":{{"@type":"Organization","name":"فريق دليل ألوان البول"}},"publisher":{{"@type":"Organization","name":"دليل ألوان البول"}},"about":{{"@type":"MedicalCondition","name":"{escape(a['about'])}"}}}}</script></head><body class="article-page"><a href="#main" class="skip-link">تخطَّ إلى المحتوى الرئيسي</a><header class="site-header"><div class="container header-inner"><a href="../index.html" class="brand"><span class="brand-mark" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 6 10.5 6 15a6 6 0 0 0 12 0c0-4.5-6-13-6-13Z" fill="#fff"/></svg></span><span class="brand-text"><strong>دليل ألوان البول</strong><span>Urine Color Guide</span></span></a><nav class="main-nav" id="mainNav" aria-label="التنقل الرئيسي">{nav}</nav><div class="header-actions"><button class="icon-btn" id="themeToggle" aria-label="تبديل الوضع الليلي" title="الوضع الليلي">🌙</button><button class="icon-btn nav-toggle" id="navToggle" aria-label="فتح القائمة" aria-expanded="false" aria-controls="mainNav" title="القائمة">☰</button></div></div></header><main id="main"><section class="section" style="padding-bottom:0"><div class="container"><nav class="breadcrumb" aria-label="مسار التصفح"><a href="../index.html">الرئيسية</a><span>/</span><a href="../articles.html">المقالات الطبية</a><span>/</span><span>{escape(a['title'])}</span></nav><div class="article-header"><span class="article-category">{escape(a['category'])}</span><h1>{escape(a['title'])}</h1><p class="article-dek">{escape(a['intro'])}</p><div class="article-meta"><span class="meta-item">آخر تحديث: {a['date']}</span><span class="meta-item">مدة القراءة: {a['reading']}</span><span class="meta-item">محتوى تثقيفي موثق</span></div></div><div class="reviewer-card"><div class="reviewer-avatar" aria-hidden="true">ط</div><div class="reviewer-info"><strong>مراجعة تحريرية طبية</strong><span>أُعدّ المحتوى للتثقيف العام بالاستناد إلى المصادر الرسمية المرتبطة في نهاية المقال.</span></div></div><figure class="article-hero-figure">{svg(a['hero_label'])}<figcaption>رسم توضيحي مبسط مرتبط بموضوع المقال، وليس صورة تشخيصية.</figcaption></figure><div class="article-layout"><aside class="article-toc" aria-label="محتويات المقالة"><h2>محتويات المقالة</h2><ol>{toc}</ol></aside><article class="article-body"><p>{escape(a['intro'])}</p>{a['body']}<div class="article-share" aria-label="مشاركة المقالة"><span>شارك المقالة:</span><a class="share-btn" href="https://wa.me/?text={escape(a['title'])}" target="_blank" rel="noopener" aria-label="مشاركة عبر واتساب">وات</a><a class="share-btn" href="mailto:?subject={escape(a['title'])}" aria-label="مشاركة عبر البريد">✉</a><a class="share-btn" href="#main" aria-label="العودة إلى بداية المقال">↑</a></div><div class="source-tag">{sources}</div></article></div><section class="related-articles"><h2 style="text-align:right;color:var(--primary-dark)">مقالات ذات صلة</h2><div class="related-grid">{related}</div></section></div></section><div class="ad-container"><div class="ad-box">مساحة إعلانية متجاوبة</div></div></main><footer class="site-footer" id="contact"><div class="container"><div class="footer-grid"><div><h4>دليل ألوان البول</h4><p>مرجع عربي تثقيفي يشرح دلالات ألوان البول وصحة الكلى والمسالك البولية بالاعتماد على مصادر طبية عالمية.</p></div><div><h4>روابط الصفحات</h4><ul><li><a href="../index.html">الرئيسية</a></li><li><a href="../index.html#colors">دليل الألوان</a></li><li><a href="../articles.html">المقالات</a></li><li><a href="../index.html#faq">الأسئلة الشائعة</a></li><li><a href="../contact.html">اتصل بنا</a></li><li><a href="../privacy.html">سياسة الخصوصية</a></li><li><a href="../disclaimer.html">إخلاء المسؤولية</a></li></ul></div><div><h4>مراجع مختارة</h4><ul><li><a href="https://www.niddk.nih.gov/" target="_blank" rel="noopener">NIDDK</a></li><li><a href="https://www.cdc.gov/" target="_blank" rel="noopener">CDC</a></li><li><a href="https://www.kidney.org/" target="_blank" rel="noopener">National Kidney Foundation</a></li></ul></div><div><h4>تنبيه</h4><p>المحتوى تثقيفي ولا يغني عن استشارة طبيب مختص.</p></div></div><div class="footer-bottom"><span>© <span id="year"></span> دليل ألوان البول. جميع الحقوق محفوظة.</span><span>المحتوى تثقيفي ولا يقدم تشخيصاً فردياً.</span></div></div></footer><button class="back-to-top" id="backToTop" aria-label="العودة إلى الأعلى">↑</button><script src="../assets/js/data.js"></script><script src="../assets/js/faq-data.js"></script><script src="../assets/js/app.js"></script><script defer src="../assets/js/adsData.js"></script></body></html>'''

for article in ARTICLES:
    (OUT / f"{article['slug']}.html").write_text(shell(article), encoding="utf-8")

cards = ''.join(f'''<a class="article-card" href="articles/{a['slug']}.html"><span class="article-category">{escape(a['category'])}</span><h2>{escape(a['title'])}</h2><p>{escape(a['description'])}</p><span class="read-more">اقرأ المقالة ←</span></a>''' for a in ARTICLES)
index = f'''<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>المقالات الطبية | دليل ألوان البول</title><meta name="description" content="مقالات عربية تثقيفية موثقة عن أمراض الكلى والمسالك البولية وتغيرات لون البول."><meta name="robots" content="index, follow"><meta name="theme-color" content="#0F4C81"><link rel="canonical" href="https://imadtbn.github.io/urine-color-guide/articles.html"><link rel="icon" href="favicon.ico" sizes="any"><link rel="manifest" href="manifest.webmanifest"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@500;700;900&family=Tajawal:wght@400;500;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="assets/css/style.css"><link rel="stylesheet" href="assets/css/responsive.css"><link rel="stylesheet" href="assets/css/article.css"></head><body class="article-page"><a href="#main" class="skip-link">تخطَّ إلى المحتوى الرئيسي</a><header class="site-header"><div class="container header-inner"><a href="index.html" class="brand"><span class="brand-mark" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 6 10.5 6 15a6 6 0 0 0 12 0c0-4.5-6-13-6-13Z" fill="#fff"/></svg></span><span class="brand-text"><strong>دليل ألوان البول</strong><span>Urine Color Guide</span></span></a><nav class="main-nav" id="mainNav" aria-label="التنقل الرئيسي"><a href="index.html#colors">دليل الألوان</a><a href="index.html#compare">المقارنة</a><a href="index.html#hydration">الترطيب</a><a href="index.html#faq">الأسئلة الشائعة</a><a href="articles.html" aria-current="page">المقالات</a><a href="contact.html">اتصل بنا</a></nav><div class="header-actions"><button class="icon-btn" id="themeToggle" aria-label="تبديل الوضع الليلي" title="الوضع الليلي">🌙</button><button class="icon-btn nav-toggle" id="navToggle" aria-label="فتح القائمة" aria-expanded="false" aria-controls="mainNav" title="القائمة">☰</button></div></div></header><main id="main"><section class="section"><div class="container"><div class="article-header"><span class="article-category">مكتبة التثقيف الصحي</span><h1>مقالات الكلى والمسالك البولية</h1><p class="article-index-intro">قراءات عربية مبسّطة عن التهابات المسالك، حصى الكلى، البيلة الدموية، البروتين في البول، وأمراض الكلى. كل مقال يوضح حدود لون البول ويضع روابط مباشرة إلى مصادر رسمية معروفة.</p></div><div class="article-index">{cards}<a class="article-card" href="articles/uti-symptoms-urine-color.html"><span class="article-category">صحة المسالك البولية</span><h2>التهابات المسالك البولية: الأعراض ولون البول</h2><p>كيف تؤثر العدوى على رائحة البول ووضوحه ولونه، ومتى تستدعي الأعراض استشارة عاجلة؟</p><span class="read-more">اقرأ المقالة ←</span></a></div><div class="article-disclaimer"><strong>ملاحظة تحريرية:</strong> هذه المقالات للتثقيف العام، ولا تشخّص الحالات ولا تقدم علاجاً فردياً. عند وجود أعراض مقلقة، راجع الطبيب أو الطوارئ حسب شدتها.</div></div></section></main><footer class="site-footer" id="contact"><div class="container"><div class="footer-grid"><div><h4>دليل ألوان البول</h4><p>مرجع عربي تثقيفي يشرح دلالات ألوان البول وصحة الكلى والمسالك البولية.</p></div><div><h4>روابط الصفحات</h4><ul><li><a href="index.html">الرئيسية</a></li><li><a href="index.html#colors">دليل الألوان</a></li><li><a href="articles.html">المقالات</a></li><li><a href="index.html#faq">الأسئلة الشائعة</a></li><li><a href="contact.html">اتصل بنا</a></li><li><a href="privacy.html">سياسة الخصوصية</a></li><li><a href="disclaimer.html">إخلاء المسؤولية</a></li></ul></div><div><h4>مراجع مختارة</h4><ul><li><a href="https://www.niddk.nih.gov/" target="_blank" rel="noopener">NIDDK</a></li><li><a href="https://www.cdc.gov/" target="_blank" rel="noopener">CDC</a></li><li><a href="https://www.kidney.org/" target="_blank" rel="noopener">National Kidney Foundation</a></li></ul></div><div><h4>تنبيه</h4><p>المحتوى تثقيفي ولا يغني عن استشارة طبيب مختص.</p></div></div><div class="footer-bottom"><span>© <span id="year"></span> دليل ألوان البول. جميع الحقوق محفوظة.</span><span>المحتوى تثقيفي ولا يقدم تشخيصاً فردياً.</span></div></div></footer><button class="back-to-top" id="backToTop" aria-label="العودة إلى الأعلى">↑</button><script src="assets/js/data.js"></script><script src="assets/js/faq-data.js"></script><script src="assets/js/app.js"></script><script defer src="assets/js/adsData.js"></script></body></html>'''
(ROOT / "articles.html").write_text(index, encoding="utf-8")
print(f"generated {len(ARTICLES)} new articles and refreshed articles.html")
