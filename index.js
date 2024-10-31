const tmi = require('tmi.js'),
    { channel, channelt, username, password, client_id, api_access_token, channel_access_token, boy, girl, eiad } = require('./settings.json');

var request = require('request');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel, channelt]
};

const headers = {
    Authorization: `Bearer ${api_access_token}`,
    'Client-Id': client_id
}

const headers_2 = {
    Authorization: `Bearer ${channel_access_token}`,
    'Client-Id': client_id,
    'Content-Type': 'application/json'
}

async function getUser(user) {
    const params = { login: user };
    const result = await fetch(`https://api.twitch.tv/helix/users?` + new URLSearchParams(params), {
      method: 'GET',
      headers: headers
    }).then((response => response.json()))
    
    return result
}

async function getRandomViewer(channel_name) {
    const params = {channel : channel_name}

    const result = await fetch("https://2g.be/twitch/randomviewer.php?" + new URLSearchParams(params), {
        method: 'GET',
    }).then((response => response.text()))

    return result
}

function extractArgs(str) {
    const regex = /\(([^)]*)\)|\b(\w+)\b/g;
    return Array.from(str.matchAll(regex), match => match[1] || match[2]);
}

const client = new tmi.Client(options);
client.connect().catch(console.error);

const list1 = [ 'هات حب محمص ومع كوب شاي','جيب لي عدس مع خبز تميس وكرك والحساب ع ابوي','النفسية يادوبك مابي اكل','ابي شوكلت مابي اكل','انت بذات مابي منك شيء ابوي منبهني منك يمكن تسممني','ما اخذ من غرباء','هابي ميل نجت ولعبة اولاد بليز','صايمه','ماكل ذبيحة قبل شوي والكرشة مترين قدام ',' مسوي رجيم ',' شوف اذا على حسابك هات اي شيء ',' شوف دامك سألتني حبيت اقولك اني مسوي تكميم ',' وش الفايده من الاكل ',' اندومي  ',' عندي توست وجبن تبي؟ ',' ابي مفطح ',' لامعي القمريه والنفسيه لك عليها بس شكرًا ل سؤال ',' تدري انا عازمك وش تبي تاكل انت ',' لا شكرًا توه بابا جاب لي اكل ',' انا ما ابي اكل انا ابيك انت (ايموت يعض على شفايفه) ',' شوفت صورتك احلى من اي اكل ',' الله ع ريش وكباب وصحن حمص ',' نص حبه من البيك حراق مع ببسي و زايده كوكتيل ','  شباتي و كرك ',' مالي نفس توه ابوي معطيني محاضرة عشان تحرشت بوحدة حلوه بس وش اسوي يقطع شكلها مززززة ',' برجر لحم مع بطاطس بالجبن ',' سلطه لانه تأنيب الضمير شغال ',' هات اي حاجه لو تجي انت راح اكلك ',' هممممم ما ادري وش تشوف انت؟ ',' الله على صحن كشري ',' صاروخ كبير بالجنبه ',' صحن فلافل مشكل ',' كبسة لحم يميي ',' انا نبته اتغذى على الطاقه الشمسية ',' ما ادري ',' رامن نفس اللي في ناروتو ','  منتو مع شطة وكمون ',' بيتزا اطراف جبن ',' معصوب ',' عريكة جنوبيه ',' ابي شكشوكة ',' ماكرونه باشميل ',' فتوتشيني ',' سليق طايفي ',' نص تيس مندي ',' مضغوط ',' مسوي خوي ',' شوف دامك سألت انا كنت احب وحده بس طلعت تحبي وسحب عليها ','  ما ابي بس اذا عندك مويه مانقول لا ',' ستريبز ',' دونات طويله ',' شوف مالي خلق اكل اكتب  شرب؟ لانه احس اني عطشاااان ',' انت بالذات لاتسوي خوي ',' خبز ناشف زي حياتي ناشفه ',' نفسي ب رهش و جام ',' بلاليط ',' فول وتميس ',' لا شبعان بس نفسي في ايسكريم ',' حبحب صيفي ',' خبز و زبادي ',' ملوخيه بالارانب ',' دولمة عراقيه ',' ايسكريم فانيليا من ماك ',' سوشي ',' مطبق ',' كبدة وتقاطيع ',' كودو دجاج ',' فاهيتا ','كونفليكس ',' عسل يا عسل ',' كباب ',' تبوله ',' برجر لحم مشوي ',' وجبه من البيك ',' سمك وصياديه ',' روبيان 🍤 ',' انت ابعد عني وبس',]

let randomName2 = list1[Math.floor(Math.random()*list1.length)]
        
console.log(randomName2)

const list20 = ['مدينه بحرف', 'سياره بحرف', 'ماركه بحرف','اسم بحرف','جماد بحرف','تطبيق بحرف','فريق بحرف','فلم بحرف','مسلسل بحرف','لعبه بحرف',]

let randomName0 = list20[Math.floor(Math.random()*list20.length)]
        
console.log(randomName0)

const list30 = ['ج' ,' ح',' خ' ,' ه' ,' ع' ,' غ' ,' ف' ,' ق' ,'ث ' ,' ص' ,' ض' ,' ط' ,' ك' ,' م' ,' ن' ,' ت' ,' ا' ,' ل' ,' ب',' ي' ,' ي','ش' ,' د' ,' ظ' ,' ز' ,' و' ,' و' ,' ر' ,' ذ']

let randomElement00 = list30[Math.floor(Math.random()*list30.length)]
        
console.log(randomElement00)

const list4 = ['خذني على البحر ولعبني بسكوتر','شفت المكسرات؟ انا متكسر اكثر منها اعتذر من الطلعة', 'لا انت نفسية ما ينطلع معك', 'اذا بتعزمني ع حسابك تم', 'لا بنام مو فاضي', 'الوقت تأخر ماما وبابا ما يرضون ',' ايه مشينا عندي نكتة جديدة بس عندك قهوة؟ ',' شوف معي سنارة صيد للسمك مشينا ',' لا مطفر ',' مشينا نكشت ونشب الضوء ',' شوف ودي من زمان اقولك بس كنت مستحي بس دامها جات منك تمتمتمتمتم ',' سؤال عني يكفيني عن الف طلعه تعال دس بقولك سر ',' ليه نطلع وانا جالس في قلبك ',' شوف وراي بكرة دوام وغثاء لذلك صرف  نفسك ',' اي الزكمة ذبحتني','اللي يتعايش مع امي وابوي غصب عنه يتعب','لا بس جوعان','شدخلك','تعبان اي والله تعبان تعبان وهمي اه اه','تعبان وبصير زين لو عطيتني بوسة وحلاوة ',' ابي مكان زحمه وفي ناس alwuteWink ',' مشينا يلا اي مكان طفشت وانا جالس عند المايك وهذا بس يتفل علي ',' مشغول مشغول جالس اراقب الوضع ',' شوف دامك ملزم يصير نطلع على حساب خديجة موافق؟ ',' شوف اللي تحتي ممكن يبي يطلع ',' صمت ',' بدري بدري من صلاة العصر انا انتظرك تقول نطلع جايني الحين الساعه 12 تبي نطلع؟؟؟؟ ',' لا عندي موعد غرامي  lilfokaAr7b ',' لا ابي ارقص شغل لي شيء يخليني اترقص ',' تعرف تدق عود؟ ',' عارف لك مخطط جديد عليه جلسات',]

let randomElement1 = list4[Math.floor(Math.random()*list4.length)]
        
console.log(randomElement1)

const list5 = ['جوي','انا دايمًا المركز الاول بالعالم مو مثل بابا ضئيل','مالي خلق ابي اتبطح وازط', 'لعبتكم نايمه','مكانتي ما تسمح لي ألعب معكم', 'العبو مع ابوي الي مو فالح الا بالخسارة والهبد','لا مالي نفس بتفرج عليكم بس ',' حسن مستواك وتعال ',' انت غبي تتحدى بوت ',' شوف اذا فيها عشى قُدَّام ',' لا انا فاشل انا حشرة انا ضئيل بس ماراح تفوز علي ',' مسوي خوي ',' معي اتصال دقيقه   herodevilAKAFBI   ',' امي تبي خبز ',' ما اقدر لانه مررررة جوعان ',' جالس احتسي القهوة السوداء ',' لا انا اجازة اليوم ',' مسوي مشاكل مع ابوي ',' ابي اتزوج ماني فاضي حقك ',' انا خلني احل واجبي قال تحدي قال',]

let randomElement2 = list5[Math.floor(Math.random()*list5.length)]
        
console.log(randomElement2)

const list6 = ['وش قهوته انا من حزب الشاي','ما اشرب الا قهوة عربية ولو سمحت لازم حلا','لا اشرب الا القهوة المُقطرة','وش قهوة مافي اطلق من الحليب الفراولة السعودية','بسال ماما اذا عادي لان تقول ان بس للعجايز','مطفر','سبانش لاتيه', 'لا شربت ',' قهوة من دانك حجم وسط دارك روست ',' كرك ',' شاي اخضر توي ماكل ',' ماتشا ',' ايس شيكن فرابتشينو دبل شوت ايسبريسو ',' كارميل ميكانو ',' مويه وحارة بعد ',' سنتوب ',' حمضيات ',' ببسي دايت ',' تفاح صح مو شيء ثاني ',' لا جيعان ',' فيمتو باااارد ',' زنجبيل لانه حلقي مكربن ',' حل عني حل ',' لا ابي اكل اكتب اكل؟ ',' ونبيس عمك احم احم بالخطاء لا ما ابي اشرب ',' شوف اسأل هذا @EIADu ',' دم ',' كودريد نكهه ',' بلاك كافي كسواد دنياي ','ابي غوار ',' بابونج ',' شاي مغربي ',' بيرة؟ ',' هات اي شيء ',' لبن بارد ',' صايم ',' لا زعلان ',' هات سفن بطني جالس يسوي حركات ',' لا وحل عني ',' شتبي؟؟ مسوي خوي ',' شوف كنت بتقبل من الكل بس منك انت؟؟ قلوا الناس ',' شاي منعنع مع فصفص واحلى حش ',' كورتادو ',' لاتيه والحليب لوز عشان تعرف فيجن ',]

let randomElement3 = list6[Math.floor(Math.random()*list6.length)]
        
console.log(randomElement3)

const list7 = [
  'ما هو أفضل كتاب قرأته على الإطلاق ولماذا أثر فيك بهذا الشكل؟',
  'شيء نفسك يرجع ؟',
  'من علامات روقانك ؟',
  'مين تتوقع ينظر إليك طول الوقت بدون ملل ؟',
  'وش اسم الحي الي ساكن فيه ؟',
  'لو واحد يتدخل في أمورك وأنت ما طلبت منه وش بتقوله ؟',
  'وش أول طريقة تتبعها إذا جيت تراضي شخص آخر',
  'شيء اشتريته عبر الإنترنت، وكيف كانت تجربتك ؟',
  'شيء عندك أهم من الناس',
  'كذبة كنت تصدقها وأنت صغير',
  'لو أتيح لك الزواج من غير جنسيتك، أي جنسية ستختار ؟',
  'أسف تقولها لمين ؟',
  'كم وزنك ؟',
  'أفضل طريقة تراضي فيها شخص قريب منك ؟',
  'أعز صديق عندك كيف تعرفت عليه ؟',
  'أكثر شخص يسوي فيك مقالب ؟',
  'حكمة تؤمن بها جدا؟ ولماذا؟ وعلى من طبقتها ؟',
  'شخص يعرف عنك كل شيء تقريباً ؟',
  'أشياء إذا سويتها لشخص تدل على أنك تحبه كثير ؟',
  'مع أو ضد: خير لك أن تكون مغفلاً من أن تستغفل غيرك',
  'ثلاث أشياء جنبك الحين ؟',
  'جربت الشهرة أو تتمناها ؟',
  'لو كنت شخصية أنمي أي شخصية بتكون ؟',
  'أكثر مكان تحب تجلس فيه في البيت ؟',
  'منشن شخص لو ما شفته تحس يومك ناقص ؟',
  'أكثر شيء ضيعت عليه فلوسك ؟',
  'عرف عن نفسك بسطر',
  'وش أكثر سؤال يدور في بالك ؟',
  'شيء من الماضي للحين عندك ؟',
  'إذا كنت بنقاش مع شخص وطلع الحق معه تعترف له ولا تصر على كلامك ؟',
  'عمرك طحت بمكان عام ؟',
  'ما معنى الحب بنظرك ؟',
  'خطط السفر الخاصة بك غالبًا ما تكون مدروسة ؟',
  'لو شلنا من طولك 100 كم يبقى من طولك ؟',
  'اكتب أول كلمة جات في بالك الحين ؟',
  'أطول مدة نمت فيها كم ساعة ؟',
  'ليت الدنيا حلوة مثل؟',
  'بماذا يُحدثك قلبك هذه الأيام ؟',
  'من النوع اللي تحفظ أسماء الناس بسرعة ولا بس أشكالهم ؟',
  'آخر مرة نزل عندكم مطر ؟',
  'كيف سيكون العالم لو كان مثلك ؟',
  'كم من 10 تحس بالطفش ؟',
  'لو أحد بيذكرك فيه وأنت ناسي بتسلك له ؟',
  'حكمة اليوم وكل يوم ؟',
  'هل أنت من لديهم رغبة حب التملك وإذا تملك الشيء أصابه الملل منه ؟',
  'ما هو أخطر عدو للإنسان ؟',
  'من الأشياء البسيطة اللي تسعدك ؟',
  'لو كنت ممثل وش تتوقع الدور اللي بتتقنه؟',
  'هل تقلق بما يعتقده الآخرون عنك ؟',
  'وش اسم أول شخص تعرفت عليه في التويتش ؟',
  'أتفه شيء أرسلوك عشانه ؟',
  'وظيفة تحسها لايقة عليك ؟',
  'تفضل الألوان الداكنة ولا الفاتحة ؟',
  'أهم شيء يكون معك في كل طلعاتك ؟',
  'الشخص الذي اعترف لك بالحب استمر بحبك أم تبخر كالعادة؟',
  'متى لازم تقول لا ؟',
  'أغنيتك المفضلة',
  '... جربت تروح اختبار بدون ما تذاكر ؟',
  'كم من عشرة تقيم يومك ؟',
  'قوة الصداقة بالمدة ولا بالمواقف ؟',
  'مقولة أو مثل أو بيت شعر قريب من قلبك ؟',
  'اكتب شيء تؤجر عليه ...',
  'غالبًا وش تسوي الآن لو ما كان في بث تركي ؟',
  'لو رجع لك شخص تعرفه بعد علاقته بالخيانة، راح ترجع نفس أول ؟',
  'لو التمني يصير حقيقة وش بتسوي؟ وش أمنيتك بتكون',
  '@منشن: الشخص اللي عادي تقوله أسرارك',
  'أحقر الناس هو من ؟',
  'عادة غريبة تسويها',
  '.. تحب المكالمات الطويلة ؟',
  'أكثر شخص فاهمك بالدنيا ؟',
  'أجمل اسم بنت بحرف السين ؟',
  'وش تقول إذا شفت وجهك بالمراية ؟',
  'عمرك فضفضت لشخص وندمت ؟',
  'تشوف أنك قادر على تحمل المسؤولية ؟',
  'اسم ألطف شخص مر عليك إلكترونيًا',
  'لو خيروك بين يعطونك مليون أو راتب شهري متوسط بدون عمل مدى الحياة إيش تختار ؟',
  'لو فقط مسموح شخص واحد تتابعه في السناب فمن بيكون ؟',
  '(أنت كل شيء بحياتي) لمن تقولها ؟',
  'شخص يكلمك بشكل يومي ؟',
  'إيموجي يعبر عن وضعك الحين ؟',
  'أكثر مصايبك مع مين ؟',
  'عادي تطلع وجوالك ما فيه شحن كثير ؟',
  'تقدر تسيطر على (ضحكتك - نومك - جوعك)؟؟',
  'كم من عشرة تحب الجلسة بالبيت ؟',
  'مع أو ضد: دائما يكون اهتمامنا مع الإنسان الخطأ',
  'أكثر شيء شاغل تفكيرك هاليومين ؟',
  'مع أو ضد: لو ما أخذت شيء معك وقت زيارة أحد أنت مقصر',
  'أكثر حيوان تحبه ؟',
  'من النوع اللي تعتمد على غيرك ولا كل شيء تسويه بنفسك ؟',
  'وش أبشع شعور مريت فيه',
  'كم نسبة الغيرة عندك من 10',
  'متى آخر مرة قلت ليتني سكت ؟',
  'أنت على منبر الآن والجميع يستمع، ماذا ستقول ؟',
  'إذا زعلت إيش يرضيك ؟',
  'مع كم صديق حقيقي خرجت خلال مسيرتك للآن؟',
  'حلمك بالمستقبل ؟',
  'شايل هم شيء ؟',
  '"المنطقي عديم إحساس" مع أو ضد والسبب؟ لقبك عند أخوياك ؟',
  'كم تحتاج وقت عشان تتعود على مكان جديد ؟',
  'لو للحياة لون إيش بيكون لون حياتك ؟',
  'لو أصبت بحالة اكتئاب هل لديك مانع من اللجوء إلى طبيب نفسي؟',
  'أكلة أدمنتها الفترة ذي ؟',
  'كم تعطي نفسك من 10 في اللغة الإنجليزية ؟',
  'العصر إيش كنت تسوي ؟',
  'كم تعطي نفسك من عشرة بالجدية بحياتك ؟',
  'سؤال دايم تتهرب من الإجابة عليه',
  'أطول مدة قضيتها بدون أكل ؟',
  'أكثر مشاكلك بسبب ؟',
  'قبل ساعة، ماذا كنت تفعل ؟',
  'كلمة تقولها لبعض الأشخاص في حياتك',
  'لو أتيحت لك الفرصة للجلوس مع شخص غايب عنك، من ستختار؟',
  'نظام نومك',
  'ما هي الشخصية المستفزة بالنسبة لك ؟',
  'كيف تعرف إذا هذا الشخص يكذب ولا لا ؟',
  'شخص تحبه',
  '@منشن : شخص تشوفه نفسية',
  'مين جالس عندك ؟',
  'تنام بأي مكان، ولا بس غرفتك ؟',
  'ما هو أكثر شيء يجعلك تشعر بالسعادة والرضا؟',
  'ما هو أفضل نصيحة تلقيتها في حياتك، ومن قدمها لك؟',
  'ما هو أكثر شيء تشعر بالامتنان له في حياتك؟',
  'ما هو الحلم الذي تسعى لتحقيقه منذ فترة طويلة ولماذا؟',
  'إذا كان بإمكانك تناول العشاء مع أي شخصية تاريخية، من ستختار ولماذا؟',
  'ما هو فيلمك المفضل وكيف أثر فيك؟',
  'ما هو أغرب حلم حلمت به؟',
  'ما هي اللحظة التي شعرت فيها بأكبر فخر في حياتك؟'
];

let randomElement4 = list7[Math.floor(Math.random()*list7.length)]
        
console.log(randomElement4)

const listms = ['مساء الرمان شو مالو قلبي وجعان','مساء الديسباسيتو شعرك حرير ولا مسشوريتو','مساء الباتنجان، ممكن بوسة ولا خجلان؟ 🐸','مساء الخوخ ممكن صورتك عشان ادوخ','مساء التفاح يمكن بحبك ارتاح. 😂😂','مساء البصل ممكن نسى يلي حصل',' مساء الحنان ممكن العنوان ؟','مساء القنابل ممكن نتقابل ؟','مساء الأناقة ممكن طلب صداقة ؟','مساء الغرام ممكن الإنستجرام ؟','مساء العطور ممكن تتفضلي معايا علي السحور ؟',' مساء الورد شعرك طبيعي ولا فرد ؟','مساء الخير هو إنتي اللي بتعمليه في قلبي ده فير ؟','مساء البندورة للناس الأمورة ','مساء الكعك في مجال نحكي معك؟','مساء الحلوين ممكن تردين؟','مساء التفكير ممكن نحكي كتير؟','مساء الشمام ممكن تقلب وجهك تنام؟','مساء الكباب ممكن السناب ؟','مساء المشمش ممكن ندردش ؟','مساء الغطس ممكن الواطس ؟','مساء السكر يلي عليك الباب مسكر','مساء النور يا احلا ماتكون',]

let randomElementms = listms[Math.floor(Math.random()*listms.length)]
        
console.log(randomElementms)

const listsb = ['صباح الفراولة ممكن محاولة','صباح الحنان ، ممكن العنوان ؟','صباح الأناقة ، ممكن طلب صداقة ؟','صباح الكنادر .. ممكن نتعرف والا أغادر','صباح العناب ممكن السناب ؟؟🐸🐸','صباح الحنيه ممكن نتعرف ع الحراميه','صباح الشيك شآك شوك ممكن تديني الفيس بوك ؟','صباح الغرام ، ممكن الإنستجرام ؟','صباح الورد ، شعرك طبيعي ولا فرد ؟','صباح الخير ، هو إنت اللي بتعمله في قلبي ده فير ؟','صباح الفرواله يكفيني شرف المحاوله','صباح الهنا مني انا 😉','صباح التوت يا حلو يا كيوت','صباح التفاح للي له قلبي يرتاح ','صباح البرتقال للي دايم علي البال','صباح الشمام ممكن تقلب وجهك تنام','صباح الكعك في مجال نحكي معك','يا صباح الخوخ أديني رقمك لحسن أدوخ','مساء الفل على قلبك جاي أطل','صباح البطاطا للناس الي تتعاطى','صباح الزبادي يا معذب فؤادي مُفتقدني ولا عادي','صباح الزبادي يا معذب فؤادي بتحبني ولا عادي',]

let randomElementsb = listsb[Math.floor(Math.random()*listsb.length)]
        
console.log(randomElementsb)

const listمصعب = ['ولكمممممم يا مصعبببب', '', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','',]

let randomElementمصعب = listمصعب[Math.floor(Math.random()*listمصعب.length)]
        
console.log(randomElementمصعب)

const listكز = ['ولكمممممم يا شيريييييييييي', '', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','',]

let randomElementكز = listكز[Math.floor(Math.random()*listكز.length)]
        
console.log(randomElementكز)

const listسلام = ['اهلا ومرحبا وسهلا وكل حاقه','ايها الانسان','ما شاء الله بدري؟','لا يشيخ بدري كان نمت وخلاص','معلش بس النفسيه بطاطس شويا','تعال نسوي لك زفه ع كيف كيفك','وحشتني جدا جدا','بس اسمع تعال بعد بث بابا تركي نروح ندشر سوا','اسمع انا جيعان عندك حليب وكيك؟','ياخي فقعت عيني بنورك اتقي الله','ياحظك عنبه تشان ترحب فيك شخصيا !!!','اب اب اب اش الكشخه والحضور الرهيب ذا','تو مانور بثنا وينك عنا من زمان ؟','احس حبيتك عادي ابلعك؟',]

let randomElementسلام = listسلام[Math.floor(Math.random()*listسلام.length)]
        
console.log(randomElementسلام)

const listeiad = [' ايودي', 'ابو طوطو', 'ابو طارق','تكسبر','ايااااد',' تي اكس بي ',]

let randomElementeiad = listeiad[Math.floor(Math.random()*listeiad.length)]
        
console.log(randomElementeiad)

const listترحيب = ['ارحب يا', 'اخبارك يا', 'الموووت تو ما نور البث يا','منوررررررر يا',' ولكمممم يا','يا اهلا و سهلاً يا',]

let randomElementترحيب = listترحيب[Math.floor(Math.random()*listترحيب.length)]
        
console.log(randomElementترحيب)

const list9 = ['ترى حش فيك',' ترى عازمك' ,' لابقين لبعض ',' يقول انك حلوه ',' يكرهك ', 'يحبك بس مستحي يعترف' , 'تراه ثقيل دم' ,' تراه فرفوشي راعي نكت' ,' ترى حكواتي' , 'انتم افضل اصدقاء' ,' ماتنفعوا تكلموا بعض' ,' ترى هذا حلو ',' تراه راعي خراب وخر عنه نصيحه بوت',]

let randomElement9 = list9[Math.floor(Math.random()*list9.length)]
        
console.log(randomElement9)

const list8 = ['تعال نروح ديسكو سوا','يا حلو عازمك على اسكريمة على حساب امي',' ياحلو ممكن سناب؟','تعال نشرب عصير تفاح سوا','يلا نروح البحر والشوي علية','زرفت تذكرتين حق ماما وبابا يلا نروح سوا',' ماودك تصمت قليلًا ',' ياخي هالشخص محنك ',' ترى إشتقنا ',' يابيبي تعشيت؟ ',' معي فصفص معاك شاي؟ ',' تروح افر البولي فر ؟ ',' في معركة رجل ل رجل من المنتصر',' عازمك على ستيك على حساب ',' ايه تقول ياحلوتي كيف كان يومك؟ ',' ياخي انت فنان ',' الحين جد جد عندي سؤال انت ليه حلو؟ ',' قالوا ترى مالك امل ……. ',' ليه ماتتابع حساب ماما في تويتر؟ ',' هل نحن وحدنا؟ ',' ودي اتنكس وانت؟ ',' وش رايك ب  ','   ارسل رقمك ويسبر عشان عندي موضوع معاك ','عندك حليب مقطر؟',' احس ماحبيتك',' احس حبيتك شويا ',' تتوقع انا بنت ولا ولد؟ ',' هااي اخترتك عشان تعاركني ف عاركني حالا ',' هيه انت تحب الطماطم ولا الجزر؟ ',' ابغا اكل باستا سويلي ',' لو خيروك تكون حواجب ماما خديجه ولا جبهه بابا تركي اش راح تختار؟ ',' تحبني ولا تحبني؟ ',' عندك ماسكات؟ خلصو ماسكاتي انا حزينه ',' هاي انا عنبه تشااان~ ',' ماما دايم تحذرني منك ',' انت خفاش؟ ',' احس وضعك مشكوك فيه صراحه',' متى اخر مرا بكيت؟ ',' ابغا ابكي عندك شي ابكي عليه؟ ',' انا حزينه احتاج مواساه',' بيو بيو طخيتك سوي نفسك ميت','احس انتو الاثنين تهاوشو قدامي ابغا اضحك','اسمعو انتو تعرفون بعض؟','اش رايكم نصير الاصدغاء الثلاثه؟','يقول انك كريه شويا','يقول انك افضل ما رأته عيناه ','ترا قال لي انك بكايه','ترا ذا يقول انك عسل عسل','ترا هذا ناوي عليك يبغا يشرشحك','ترا يقول انك دجاجه',]

let randomElement8 = list8[Math.floor(Math.random()*list8.length)]
        
console.log(randomElement8)

const list3 = [' افف', '  خذ و اسكت', '   جالس احط ميكياج ل امي','   افف ريحتك حلوه ','  انا متخبي',' همممم انت لذيذ',' هااااااي',' تعال ارقص',' انا ماسويت شيء',' اخيرا ',' تبي اعلم؟',' ماما شوفيه ',' يازينك',' انا مستعجل',' ابد ما يزعل ',' انا مستعجل',' همممم',' انا مسكين ','  احس يخوف أو شي',' انا مسكين ',' ترى اشوفك ',' انا جيعان لحد يكلمني','   أستاذنكم','  اسلم ','   ارقص',' يالليل',]

let randomName = list3[Math.floor(Math.random()*list3.length)]
        
console.log(randomName)

const listمدح = ['أنا فخورُ بإبداعك','شكراً لوجودك ضمن بثنا فأنت هبة من الله لنا','أنت حقاً جوهرة من الإبداع أتمنى أن تظل مبدعاً إلى الأبد','أنت شخص رائع أكثر مما تدرك','كم نحن محظوظون بوجود شخص لديه أفكار مبتكرة مثلك بيننا','عندما نبحث عن كلمات الشكر والتقدير تعجز الكلمات عن وصف ما نشعر به وتجف الأقلام قبل أن نكتب لك رسالة شكر وثناء','ما أروع العمل مع شخص مبدع مثلك لا يستسلم حتى يحقق أهدافه','لقد حاولت صياغة عبارات مدح عديدة لثنائك وشكرك على ما قدمت لنا ولكنك تجاوزت كل تلك العبارات','أجمل عبارات الشكر والعرفان لا بد أن تسبق حروفي وتنهي السطور المعبرة عن صدق المعاني النابعة من قلبي لك','كيف يكون لديك دائماً أفضل الأفكار الإبداعية، ياله من شئ رائع أن يكون إبداعك ليس له حدود','أحب طريقة تفكيرك للغاية، لا بد أن نطبق أفكارك الإبداعية على أرض الواقع، لقد أنعم الله عليك بأقصى قدر من الإبداع','أنا حقاً أحب الحديث معك فهو يفتح لي آفاقاً جديدة للتفكير','يسعدنا دائماً أن نرى نجاحك أنت حقاً تستحق ذلك','كم نحن فخورين بالنجاح الذي تحققه','لقد ساعدتنا مهاراتك الرائعة في حل مشكلاتنا والوصول إلى أهدافنا بسرعة أكبر','أتوقع لك الوصول إلى قمة النجاح فدائماً أندهش من عملك الجاد وتفانيك في أداء العمل','الإبداع في أداء عملك لم نرى مثيلاً له من قبل في بثنا','المبدع الوحيد الذي أكون سعيداً بالاطلاع على عمله هو أنت','مازلت قادراً على تقديم عمل مميز','أنت مصدر إلهام للأخرين','كم هو جميل التحدث مع شخص مبدع مثلك فأنت دائماً تنظر للحياة من منظور مختلف ومميز','لا شك أن العمل معك شئ رائع','يا لك من شخص قادر على تحقيق نتائج مبهرة رغم وجود الكثير من الأزمات شكراً لك','إن الأحرف التي باتت كلمات والكلمات التي باتت جمل فقدت كل عبارات الجمال في سبيل جمال ما تقدمه لنا','إلى صاحب أعظم مهنة وحامل أعظم رسالة كل عبارات المدح وقصائد الشكر لا تفي حقك','أنت أكثر شخص مبدع قابلته على الإطلاق','Wow, that’s how you create Very inspiring',]

let randomElementمدح = listمدح[Math.floor(Math.random()*listمدح.length)]
        
console.log(randomElementمدح)

const listسته = ['@6_iqp هلا هلا سته ','@6_iqp هلا هلا طقب','@6_iqp اهلا عطب','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','',]

     let randomElementسته = listسته[Math.floor(Math.random()*listسته.length)]
        
      console.log(randomElementسته)

      const listcat = [' @deathcaty ها صدت لي تونه ولا','صيدتك مع التونه عطني شوي ولا بضربك @deathcaty','','','','','','',]

     let randomElementcat = listcat[Math.floor(Math.random()*listcat.length)]
        
      console.log(randomElementcat)

      const listفصول = ['ندعمك فصووللل @f_q8_x','تراك غثيتنا فصول','','', '','','','','', '','','','','', '','','','','', '','','','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','','','', '','','','','', '','','','','', '','','','','',]

      let randomElementفصول = listفصول[Math.floor(Math.random()*listفصول.length)]
         
       console.log(randomElementفصول)

      const listso = ['!sr https://music.youtube.com/watch?v=Xi1SmdBvJ5U&feature=share', '!sr https://www.youtube.com/watch?v=EgT_us6AsDg&pp=ygUMc2VsZW5hIGdvbWV6', '!sr https://youtu.be/I4rtcJnRd6s','!sr https://www.youtube.com/watch?v=J6Ygf4pGcjo','!sr https://www.youtube.com/watch?v=v1miNcZiw74&list=RDGrUky4ZTVmE&index=26','!sr https://music.youtube.com/watch?v=zlF-KFWf6c4&feature=share',]

      let randomElementso = listso[Math.floor(Math.random()*listso.length)]
              
      console.log(randomElementso)

      const list2 = ['herodevil8nf4 ', 'herodevilAKAFBI ', 'herodevilGutiar ','herodevil77dance  ','herodevilMst83d ','herodevilT8HO ',]

      let randomElement = list2[Math.floor(Math.random()*list2.length)]
              
      console.log(randomElement)

 /* const listbits = [`و اخيرًا ابو صنادح بيشتري لي بندق  `,`لقد أضفت الكثير لحياتي، !`,`أشكرك على كرمك وسخاءك!`,`لقد أدخلت السعادة على قلبي، !`,`تقديري لك وشكري العميق!`,`أشكر الله على وجودك في حياتي!`,`شكرًا لكل المجهود الذي بذلته!`, `لقد جعلت يومي أفضل، !`,`مليت وانا اطلب من بابا يشري لي سوني 5 ويقول ماعنده😢.. الله يسعدك يا  على الدعم بتساعدني على اقناع بابا 😘`,` ماما خديجة ازعجتنا وهي تبي مكنسة روبوتية 🧹😒، بهذا الدعم ساعدتنا اننا نسكتها ونجيب لها المكنسة شكرا لك والله يسعدك 🥰`,` اخيييرا بهذا الدعم اقدر اقنع بابا يشري لي بي سي مثل حقه ابي ابدأ ابث مثله 😭، شكرا الله يكثر خيرك 🥹`,` شكرًا لك على إسعادي وجعل يومي أفضل`,`لا أعرف كيف أعبر عن شكري لك`,` أنا ممتن لحسن قلبك وسخاءك`,` شكرًا لك على مساعدتي ودعمي`,`أنا ممتن لكل شيء قدمته لي دون مقابل`,` أشعر بالامتنان والشكر لكل ما تفعله لي`,`شكرًا لك على إدخال السعادة والفرح إلى حياتي`,`لا يمكنني أن أعبر عن شكري الكبير لك بكلمات`,`شكرًا لك على كل المجهود الذي بذلته من أجلي`,` لقد أدخلت النور والسعادة إلى حياتي`,` شكرًا لك على تقديم الدعم والمساندة اللازمة`,`شكرًا لك على إدخال الأمل والتفاؤل إلى حياتي`,`شكرًا لك على إسعادي وجعلني أشعر بالأمان والراحة`,`لا يمكنني أن أعرف كيف أعيش دون ما قدمته لي`,`شكرًا لك على الوقت والجهد الذي قدمته لي`,` أشعر بالامتنان والشكر لكل ما قدمته لي من قبل`,`شكرًا لك على إظهار الصدق والإخلاص في علاقتك معي`,`لا يمكنني الاستغناء عن ما قدمته لي في أوقات الحاجة`,]

 let randomElementbits = listbits[Math.floor(Math.random()*listbits.length)]
              
 console.log(randomElementbits) */

 /* setInterval(function () {
    getRandomViewer("herodevil777").then(randomuser => {
        console.log(client.say(channel, ` ${list8[Math.floor(Math.random()*list8.length)]} @${randomuser} `))
    })
},600000);

setInterval(function () {
    getRandomViewer("herodevil777").then(randomuser => {
    getRandomViewer("herodevil777").then(randomuser0 => {
       console.log(client.say(channel, ` @${randomuser0} ${list9[Math.floor(Math.random()*list9.length)]} @${randomuser} `))
    })})
},863000); */

 /* client.on('connected', () => {
    client.say(channel, `السلام عليكم عنب جاء   `);
 }); */

client.on('message', (channel, user, message, self) => {
    if(self) return;

    const firstWord = message.split(' ')[0]; // Get the first word of the message
      
   //console.log(channel,`The first word of the message is: ${firstWord}`);
   
   const cat = message.split(' ');
   const cat1 = message.split(' ')[1];
   const cat2 = message.split(' ')[2];
   const cat3 = message.split(' ')[3];
   const cat4 = message.split(' ')[4];
   const cat5 = message.split(' ')[5];
   const cat6 = message.split(' ')[6];
   const cat7 = message.split(' ')[7];
   const cat10 = message.split(' ')[10];
   //client.say(channel,` ${cat}`);

   const isModerator = user['user-type'] === 'mod';
   const isBroadcaster = user.username === 'herodevil777';
   const iscontrol = isBroadcaster || user.username === 'EIADu';

    var args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();
    const userChoice = message.toLowerCase();
    const username = user["display-name"]
    const badges = user.badges
    const isMod = user.mod || (badges && user.badges["broadcaster"])
    if (command == 'prediction' && isMod) {
        args = args.join(" ")
        args = extractArgs(args);
        console.log(args)
        if (!args) {
            client.say(channel, `@${username} you didn't precise any arguments, please try again!`)
            return 0;
        }

        if (args.length < 4) {
            client.say(channel, `@${username} you need at least 4 arguments to start a prediction!`);
            return 0;
        }

        if (args.length > 12) {
            client.say(channel, `@${username} too many arguments (max of 12)`)
            return 0;
        }

        if (!Number.isInteger(+args[args.length - 1]) || args[args.length -1] == "0") {
            client.say(channel, `@${username} make sure you well precise a non-zero duration (in seconds)!`)
            return 0;
        }

        // args = [x.split("( )") for (x of )]
        // console.log(args.join(" ").split(/\s*(?![^()]*\))/))
        // args = args.join(' ')
        //                 .split( /\s*(?![^()]*\))/)
        //                .map(x => x.replace(/[()]/g, ''));
        url = 'https://api.twitch.tv/helix/predictions'
        title = args[0]
        outcomes = args.slice(1, -1).map(arg => ({title : arg}))
        prediction_window = +args[args.length - 1]
        getUser("herodevil777").then((data) => {
            channel_id = data["data"][0].id
            body_params = {
                'broadcaster_id': channel_id,
                title: title,
                outcomes: outcomes,
                'prediction_window': prediction_window
            }
        fetch(url, {
            method: 'POST',
            headers: headers_2,
            body: JSON.stringify(body_params)
          })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data["data"]) {
                    client.say(channel, `@${user.username}, prediction "${title}" started successfully!`)
                } else {
                    client.say(channel, `@${user.username}, There is already a prediction running or there was an error while requesting! Please try again!`)
                }
            }).catch(error => client.say(channel, `@${user.username}, There is already a prediction running or there was an error while requesting! Please try again!`));
        })
    }

    if(firstWord == 'say') {
        if(username == 'EIADu') {
            const response = message.slice(4); // استخراج الجزء بعد 'say '
            client.say('#herodevil777', response);
    } else {
        client.say(channel,`@${user.username} ما اسمع الا من البق بوس`)
    }
}
/* if (isModerator || isBroadcaster) {
if(firstWord == '!زيد') {
  const response = message.slice(4); // استخراج الجزء بعد 'say '
            client.say(channel, `!editcom بنك في البنك  ${response} ساعة`);
} 
} */

// تحديد الرقم الذي يأتي بعد "عد"
let commandParts = message.split(' ');
let countTo = parseInt(commandParts[1]); // يأخذ الرقم بعد كلمة "عد" ويحوله إلى رقم صحيح

if (firstWord == 'عد' && !isNaN(countTo)) {
  if (username == 'EIADu') {
    for (let i = 1; i <= countTo; i++) {
      client.say(channel, `${i}`);
    }
  }
}


if(firstWord == 'luck') {
    if(username == 'EIADu') {
    const choces = ['1', '2', '3'];
    
    function getRandomChoice() {
      const randomIndex = Math.floor(Math.random() * choces.length);
      return choces[randomIndex];
    }
    
    function determineWinner(userChoice, computerChoice, eid) {
        if (
            (userChoice === '1' && computerChoice === '1' && eid === '1') ||
            (userChoice === '2' && computerChoice === '2' && eid === '2') ||
            (userChoice === '3' && computerChoice === '3' && eid === '3')
          ) {
            return 'You win!';
          } else {
            return 'Try again';
          }
        }
    
    
    client.on('message', (channel, userstate, message, self) => {
      if (self) return;
    
      const sender = userstate.username;
      const userChoice = message.toLowerCase();
    
      if (choces.includes(userChoice)) {
        const computerChoice = getRandomChoice();
        const eid = getRandomChoice();
        const result = determineWinner(userChoice, computerChoice, eid);
        client.say(channel, `@${sender} ${userChoice} ,${computerChoice} ,${eid} ${result}`);
      } 
    
    })} else { const list2 = ['herodevil8nf4 ', 'herodevilAKAFBI ', 'herodevilGutiar ','herodevil77dance  ','herodevilMst83d ','herodevilT8HO ',]

    let randomElement = list2[Math.floor(Math.random()*list2.length)]
            
    console.log(randomElement)
            client.say(channel, ` ${list2[Math.floor(Math.random()*list2.length)]} ${list2[Math.floor(Math.random()*list2.length)]} ${list2[Math.floor(Math.random()*list2.length)]} @${user.username} `);
        }
};

/* function getRandomChoice2() {
    const randomIndex2 = Math.floor(Math.random() * list2.length);
    return list2[randomIndex2];
  }

function emot(a, b, c) {
    if (
        (a === 'herodevil8nf4' && b === 'herodevil8nf4' && c === 'herodevil8nf4') ||
        (a === 'herodevilAKAFBI' && b === 'herodevilAKAFBI' && c === 'herodevilAKAFBI')  ||
        (a === 'herodevilGutiar' && b === 'herodevilGutiar' && c === 'herodevilGutiar')   ||
        (a === 'herodevil77dance' && b === 'herodevil77dance' && c === 'herodevil77dance')  ||
        (a === 'herodevilMst83d' && b === 'herodevilMst83d' && c === 'herodevilMst83d')  ||
        (a === 'herodevilT8HO' && b === 'herodevilT8HO' && c === 'herodevilT8HO')  
      ) {
        return 'We have a winner We will register your name in the list of winners';
      } else {
        return 'Try again';
      }
    }

    if(firstWord == 'حظي؟') {
        const a = getRandomChoice2();
        const b = getRandomChoice2();
        const c = getRandomChoice2();
        const result2 = emot(a, b, c);
        client.say(channel, `@${user.username} ${a} ${b} ${c} ${result2}`);
    } */

/* if (cat4 == 'title') {
    if(username == 'Nightbot') {
    client.say(channel, ' تم تغير العنوان')
}}

if (cat4 == 'game') {
    if(username == 'Nightbot') {
    client.say(channel, ' تم تغير القيم ')
}} */

const list3a = [`${cat1}`,`@${user.username}`]
   
        let randomElement3a = list3a[Math.floor(Math.random()*list3a.length)]
           
         console.log(randomElement3a)

if (firstWord == 'عاركني') {
  if (username == 'EIADu') {
    client.say(channel, `الفائز هو @EIADu`)
  } else if (cat1 == '@eiadu') {
    client.say(channel, `الفائز هو @eiadu`)
  } else client.say(channel, `الفائز هو ${list3a[Math.floor(Math.random()*list3a.length)]}  `)
}

/* client.on('message', (channel, userstate, message, self) => {
    if (self) return; // Ignore messages from the bot itself
  
    if (message === '!randomviewer') {
      const viewers = client.getUsers(channel);
      const randomViewer = Math.floor(Math.random() * viewers.length);
      client.say(channel, `The random viewer is ${viewers[randomViewer].username}!`);
    }
  }); */
    
/* if(cat == 'عليكم') {
    client.say(channel, `هردفل الاغوى`)
} */

/* if(firstWord == 'حظي؟') {
  client.say(channel,`  @${user.username} herodevilAKAFBI herodevilAKAFBI herodevilAKAFBI  We have a winner We will register your name in the list of winners `)
} */
    if(firstWord == 'رحب') {
        if(username == 'EIADu') {
        client.say(channel,`ارحب يا ${cat2} تو ما نور البث herodevilT8HO  `)
    } else {
        client.say(channel,`يا اهلًا و سهلًا منورين جميعًا`)
    }
    }

    if (firstWord == 'صباح' && user.username !== '3nb77') {
      client.say(channel, `🌹 ${listsb[Math.floor(Math.random() * listsb.length)]} @${user.username} `);
  }

    if(firstWord == 'مساء' && user.username !== '3nb77') {
        client.say(channel, `🌹 ${listms[Math.floor(Math.random()*listms.length)]} @${user.username}  `)
    }

    /* if(username == `mugiwara911`) { 
        const listمم = [``, '','','', '','','','','','','','',]
   
        let randomElementمم = listمم[Math.floor(Math.random()*listمم.length)]
           
         console.log(randomElementمم)
        client.say(channel, `${listمم[Math.floor(Math.random()*listمم.length)]}  `);
    } */

    if(message == 'hello') {
        client.say(channel, `@${user.username}, hello!`);
    }

    if(message == '!لعبة') {
      client.say(channel, `@${user.username}  في العاب واجد {(حظي؟),(حجرة ورقة مقص),(!كلمة,!word,!anime),(!startgame),(!randomnumbers) و الكثير و الكثير من اللعاب و اذا تبي تظهر اسماء الفائزين استعمل !list} `);
  }

    if(username == 'cherryy__777') {
        client.say(channel, ` ${listكز[Math.floor(Math.random()*listكز.length)]}  `);
    }

    if(username == 'imosabx7') {
        client.say(channel, ` ${listمصعب[Math.floor(Math.random()*listمصعب.length)]}  `);
    }

    if(username == '6_iqp') {
        client.say(channel, `${listسته[Math.floor(Math.random()*listسته.length)]} `);
    }

    if(username == 'f_q8_x') {
      client.say(channel, `${listفصول[Math.floor(Math.random()*listفصول.length)]} `);
  }

  if(username == 'deathcaty') {
    client.say(channel, `${listcat[Math.floor(Math.random()*listcat.length)]}`);
}

    /* if (username.toLowerCase() === 'nightbot') return;
        
        const listmod = [`@${user.username} ${list8[Math.floor(Math.random()*list8.length)]} `, '','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','','', '',]
   
        let randomElementmod = listmod[Math.floor(Math.random()*listmod.length)]
           
         console.log(randomElementmod)
   
           client.say(channel, ` ${listmod[Math.floor(Math.random()*listmod.length)]}  `); */
    

    if (cat2 == 'SUB') {
        if (username == 'EIADu') {
            client.say(channel,`شكرا على القفت ل @${cat4} يا (@${cat10} كثر الله خيرك`)}
            if (username == 'WizeBot') {
                client.say(channel,`شكرا على القفت ل @${cat4} يا (@${cat10} كثر الله خيرك`)}
            }

            if (cat1 == 'RE-SUB') {
                if (username == 'EIADu') {
                    client.say(channel,`شكرا على الاشتراك يا @${cat3}`)}
                    if (username == 'WizeBot') {
                        client.say(channel,`شكرا على الاشتراك يا @${cat3}`)}
                    }

                    if (cat6 == 'subscriptions') {
                        if (username == 'EIADu') {
                            client.say(channel,`شكرا على القفت ل  ${cat5} اشخاص  يا @${cat1}`)}
                            if (username == 'WizeBot') {
                                client.say(channel,`شكرا على القفت ل ${cat5} اشخاص يا @${cat1}`)}
                            }

            if (firstWord == '👤') {
                if (username == 'EIADu') {
                    client.say(channel,`شكرا على الفولو يا @${cat4}`)}
                    if (username == 'WizeBot') {
                        client.say(channel,`شكرا على الفولو يا @${cat4}`)}
                    }
                    
                    
                    if(username == 'herodevil777') {
                        const listتركي = [` وش تبي انت ركز على بثك @herodevil777`, '','','', '','','','','','','','','','', '','','','','', '','','','','', '','','','','', '', '','','', '','','','','','','','','','', '','','', '','','','','','','','','','',]
   
        let randomElementتركي = listتركي[Math.floor(Math.random()*listتركي.length)]
           
         console.log(randomElementتركي)
        client.say(channel, `${listتركي[Math.floor(Math.random()*listتركي.length)]}  `);
    }

    if(message == 'ارقص عنب') {
        if(username == 'EIADu') {
            client.say(channel, `herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar `);
            client.say(channel, `herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar `);
            
            setTimeout(function () {
    
                console.log(client.say(channel, `herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance `))
                console.log(client.say(channel, `herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance `))
            
        },6000);
        } else {
            client.say(channel,`@${user.username} مب رقاصه عندك انا`)
        }
        
         }
         
         if(firstWord == 'برب') {
            const listبر = [`@${user.username} خذ راحتك يا قلبي `,`@${user.username} تيت`,`@${user.username} في امان الله`,]
    
    let randomElementبر = listبر[Math.floor(Math.random()*listبر.length)]
            
    console.log(randomElementبر)
            client.say(channel, ` ${listبر[Math.floor(Math.random()*listبر.length)]}`);
        }
            
    if(firstWord == 'باك') {
        client.say(channel, `@${user.username} ولكم باك احسن من يرجع `);
        if(username == 'EIADu') {
            client.say(channel, `${listترحيب[Math.floor(Math.random()*listترحيب.length)]} ${listeiad[Math.floor(Math.random()*listeiad.length)]}`);
        }
    }

    if(message == 'احبك عنب') {
        client.say(channel, `@${user.username}, انا احبكم بعد herode3Heart `);
    }

    if(firstWord == 'عنفني') {
        client.say(channel, `!timeout  @${user.username} 1`);
    }

    if(firstWord == 'عنف') {
        if(username == 'EIADu') {
        client.say(channel, `!timeout ${cat1}  1`);
    } else if(username == 'EIADz_88') {
        client.say(channel, `!timeout ${cat1}  1`);
    }}

    if(firstWord == 'احس') {
        client.say(channel, `@${user.username}, ياليييل انت و احساسك herodevil1  `);
    }

    if(firstWord == 'عنبي') {
        client.say(channel, `@${user.username} عيون عنب المدورة 🐹🍇`);
    }

    if(firstWord == 'عنب؟') {
        client.say(channel, `@${user.username} 🐹🍇هلا , انا عنب ولد تركي وخديجة دايم أكون بالبث وصديق الشات الصدوق`);
    }

    if(firstWord == 'عنوب') {
        client.say(channel, `لا تشغلوني قاعد اكل 🤌🏻`);
    }

    if(message == 'وين عنب') {
        client.say(channel, `@${user.username},في الحمام`);
    }

    if(message == 'عنب تحبني؟') {
        client.say(channel, `احب ماما وبابا بس 🐹`);
    }

    if(firstWord == 'كيفك') {
        client.say(channel, `@${user.username}, بخير `);
    }

    if(firstWord == 'اخباركم ') {
      client.say(channel, `@${user.username}, بخير يامال الخير بشرنا عنك `);
  }

    if(message == ' وش تكره عنب؟') {
        client.say(channel, `الشمس - بابا اذا تفل - اسكانور - الي ما يسوي فولو `);
    }

    if(message == 'ابو جبهة') {
        client.say(channel, `@${user.username} اوه قصدك بابا؟ 🐹`);
    }

    if(firstWord == 'شرايك') {
        client.say(channel, `@${user.username} مو مهتم صراحة 🐹 `);
    }

    if(message == 'عطنا حكمة') {
        client.say(channel, `@${user.username} 🐹😜 مافي` );
    }

    if(firstWord == 'مود') {
        client.say(channel, `@${user.username} كل  المود فاهين و اولهم ابو جبهة `);
    }

    if(firstWord == 'امدحني') {
        client.say(channel, `@${user.username} ${listمدح[Math.floor(Math.random()*listمدح.length)]} `);
    }

    if(firstWord == 'تربص') {
        client.say(channel, `@${user.username} تخليني لحالي  `);
    }

    if(message == 'وش تاكل عنب') {
        client.say(channel, `@${user.username} كباب ب الشكلاطه  `);
    }

    if(firstWord == '!roll') {
        client.say(channel, `@${user.username} the number is ${Math.floor(Math.random() * 6) + 1} ${Math.floor(Math.random() * 6) + 1} ${Math.floor(Math.random() * 6) + 1}`);
    }

    /* if(message == 'حظي؟') {
        const list2 = ['herodevil8nf4 ', 'herodevilAKAFBI ', 'herodevilGutiar ','herodevil77dance  ','herodevilMst83d ','herodevilT8HO ',]

let randomElement = list2[Math.floor(Math.random()*list2.length)]
        
console.log(randomElement)
        client.say(channel, ` ${list2[Math.floor(Math.random()*list2.length)]} ${list2[Math.floor(Math.random()*list2.length)]} ${list2[Math.floor(Math.random()*list2.length)]} @${user.username} `);
    } */

    if(firstWord == 'اكل؟') {
        client.say(channel, `@${user.username} ${list1[Math.floor(Math.random()*list1.length)]} `);
    }

    if(firstWord == 'نطلع؟') {
        client.say(channel, `@${user.username} ${list4[Math.floor(Math.random()*list4.length)]} `);
    }

    if(firstWord == 'تتحدى؟') {
        client.say(channel, `@${user.username} ${list5[Math.floor(Math.random()*list5.length)]} `);
    }

    if(firstWord == 'شرب؟') {
        client.say(channel, `@${user.username} ${list6[Math.floor(Math.random()*list6.length)]} `);
    }

    if(firstWord == 'سؤال؟') {
        client.say(channel, `@${user.username} ${list7[Math.floor(Math.random()*list7.length)]} `);
    }

    if(message == 'عنب قفل') {
        if(username == 'EIADu') {
        
            client.say(channel,`@${user.username} ابشر`);
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        } else if(username == 'Rraed_') {
            client.say(channel,`@${user.username} ابشر`);
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        } else if(username == 'herodevil777') {
            client.say(channel,`@${user.username} ابشر`);
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        } else {
            client.say(channel,`@${user.username} دز دز تبي تصرفن `)
    }} 

    /* if (firstWord == '✔️') {
        if (username == 'EIADu') {
    setInterval(function () {
        console.log(client.say(channel, ` ذا الجدول الايام الجايه ( السبت : سوالف و لعب || الاحد : انميات الموسم || الاثنين : سوالف و لعب وفيلاند || الثلاثاء : ايبو || الاربعاء : سوالف و لعب || الخميس : ايبو || الجمعه : ايبو ) وشكرا لكم   `))
    
    },600000);
}
if(username == 'WizeBot') {
    setInterval(function () {
        console.log(client.say(channel, ` ذا الجدول الايام الجايه ( السبت : سوالف و لعب || الاحد : انميات الموسم || الاثنين : سوالف و لعب وفيلاند || الثلاثاء : ايبو || الاربعاء : سوالف و لعب || الخميس : ايبو || الجمعه : ايبو ) وشكرا لكم   `))
    
    },600000);
}} */

/* if (firstWord == '❌') {
    if(username == 'EIADu') {
        client.say(channel,`  يلا استاذنكم في امان الله`)
        setTimeout(function () {
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        },2000);
    }
    if(username == 'WizeBot') {
        client.say(channel,`  يلا استاذنكم في امان الله`)
        setTimeout(function () {
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        },2000);
    }} */
    /* if (firstWord == '✔️') {
        if (username == 'EIADu') {
            setTimeout((ab) => {
                console.log(client.say(channel,"هذا شيء بيني وبينكم للاخرة واحب الاعمال الى الله سرور تدخله على مسلم ( https://ehsan.sa/housing/details/190 ) والدال على الخير كفاعله ومانقص مال من صدقه و انوي فيها صدقة لك ولغيرك و جزاكم الله خير مقدما "));
              }, 6000);
              
            }
        if(username == 'WizeBot') {
            const timeoutID = setTimeout(() => {
                console.log(client.say(channel,"هذا شيء بيني وبينكم للاخرة واحب الاعمال الى الله سرور تدخله على مسلم ( https://ehsan.sa/housing/details/190 ) والدال على الخير كفاعله ومانقص مال من صدقه و انوي فيها صدقة لك ولغيرك و جزاكم الله خير مقدما "));
              }, 6000);
        }
    }
    if (firstWord == '❌') {
        if(username == 'EIADu') {
            client.say(channel,`lilfokaBlueheart  يلا استاذنكم في امان الله`)
            setTimeout(function () {
                clearTimeout(ab);
                },2000);
    }
        if(username == 'WizeBot') {
            client.say(channel,`lilfokaBlueheart  يلا استاذنكم في امان الله`)
            setTimeout(function () {
            clearTimeout(timeoutID);
                },2000);
        }} */

    /* getRandomViewer("herodevil777").then(async randomuser => { */

    /* if(message == "عشاء؟") {
      client.say(channel, `@${randomuser} يبي يتعشى معك @${user.username}`);
    }

    if(message == "كف؟") {
        client.say(channel, `@${randomuser} سطرك كف  @${user.username}`);
      }

      if(message == "افطار؟") {
        client.say(channel, `@${randomuser} يبي يفطر معك @${user.username}`);
      }

    if(message == "زواج؟") {
        client.say(channel, `في رمضان @${user.username}`);
      }

     if(message == "سلام؟") {
        client.say(channel, `@${randomuser} يسلم عليك @${user.username}`);
      } */

    if(firstWord == 'لغز؟') {
        client.say(channel, ` اوجد ${list20[Math.floor(Math.random()*list20.length)]} (${list30[Math.floor(Math.random()*list30.length)]}) `);
    }
        
        if(firstWord == 'السلام')  {
            if(username == 'EIADu') {
                client.say(channel, `${listترحيب[Math.floor(Math.random()*listترحيب.length)]} ${listeiad[Math.floor(Math.random()*listeiad.length)]}`);
            } else { client.say(channel, ` وعليكم السلام ورحمة الله و بركاته ${listسلام[Math.floor(Math.random()*listسلام.length)]} @${user.username}`);
            
        }}

        
        if(firstWord == 'سلام') {
            if(username == 'EIADu') {
                client.say(channel, `${listترحيب[Math.floor(Math.random()*listترحيب.length)]} ${listeiad[Math.floor(Math.random()*listeiad.length)]}`);
            } else { client.say(channel, `وعليكم السلام ورحمة الله و بركاته ${listسلام[Math.floor(Math.random()*listسلام.length)]} @${user.username}  `);
            
        }}

        /* if (message.includes('عنب'!== 'nightbot')) {
            client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]} `);
        }
        if (message.includes('@3nb77'!== 'nightbot')) {
          client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]}`);
        } 
        if (message.includes('@3NB77'!== 'nightbot')) {
          client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]}`);
         }  */
          

          if (message.includes('عنب') && user.username.toLowerCase() !== 'nightbot' && user.username.toLowerCase() !== 'wizeBot') {
          client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]}`);
      }
      if(firstWord == '@3nb77' && user.username.toLowerCase() !== 'nightbot' && user.username.toLowerCase() !== 'wizeBot') {
          client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]}`);
      }
      if (firstWord === '@3NB77' && user.username.toLowerCase() !== 'nightbot' && user.username.toLowerCase() !== 'wizeBot') {
        client.say(channel, `@${user.username} ${list3[Math.floor(Math.random() * list3.length)]}`);
    }    

        /* if(firstWord == 'عنب') {
            client.say(channel, ` نعم اخوي انا خارج التغطيه كلمني مره ثانيه NotLikeThis @${user.username} `);
        }
        if(firstWord == '@3nb77') {
            client.say(channel, `نعم اخوي انا خارج التغطيه كلمني مره ثانيه NotLikeThis @${user.username}  `);
        }
        if(firstWord == '@3NB77') {
          client.say(channel, `نعم اخوي انا خارج التغطيه كلمني مره ثانيه NotLikeThis @${user.username}  `);
      } */

        if(message == 'كوماند؟') {
            client.say(channel, `@3NB77 - عنب - لغز؟ - سؤال؟ - شرب؟ - تتحدى؟ - نطلع؟ - اكل؟ - حظي؟ - وش تاكل عنب - امدحني - مود - عطنا حكمة - شرايك - ابو جبهة - وش تكره عنب؟ - عنب تحبني؟ - وين عنب - عنوب - عنب؟ - عنبي - احس - عنفني - عاركني - احبك عنب -  و الكثير و الكثير من الكماندات `);
        }

        /* if(firstWord == 'اغنيه') {
            client.say(channel, ` ${listso[Math.floor(Math.random()*listso.length)]}`);
        } */

        if(firstWord == '!دخل' ) {
          if(username == 'EIADu') {
          winnersList.push(cat1);
          io.emit('updateWinnersList', winnersList); // تحديث الموقع
          client.say(channel,'ok boss')
        } else {client.say(channel,` @${user.username} اشتغل و اجتهد و فوز و ادخلك اما شغل الواسطات مب عندنا`)}
      } 

      if(firstWord == 'موقع') {
        client.say(channel, ` موقع تجريبي لعنب قيد التطوير القي نظرة عليه و شاركنا تجربتك و ملاحظاتك https://3nb.wuiltweb.com `);
    }


        
});

setInterval(function () {
  client.say(channel, `فيه تحدي عندنا كل بداية شهر جديد على السباثون فيه سحب على 1000 ريال سعودي. طريقة المشاركة بسيطة: بس جمع 50 ألف نقطة و شارك، و فالكم الفوز! اذا ودك تعرف كم مر يوم، اكتب !يوم`);
}, 6 * 60 * 60 * 1000); // 6 ساعات = 6 * 60 دقيقة * 60 ثانية * 1000 مللي ثانية


/* client.on('whisper', (from, userstate, message, self) => {
   
    client.whisper(follower, 'شكرا للمتابعة! أتمنى أن تستمتع بالبث!');
}
); */

/* const TwitchAPI = require('twitch-api');
const api = new TwitchAPI({
    clientId: '6k29rg19rge0e7xpzj8z1lsh4r8cpf',
    clientSecret: '5ocoo5oui36m0x5uvjdfue8ja019qe',
});

api.getChannel('herodevil777').then(channel => {
    console.log(`The channel ${channel.display_name} has ${channel.followers} followers.`);
}).catch(err => {
    console.error(err);
});

api.getMessages('herodevil777').then(messages => {
    messages.forEach(message => {
      console.log(`${message.from} said: ${message.text}`);
    });
  }).catch(err => {
    console.error(err);
  }); */


client.on('cheer', (channel, userstate) => {
    const bits = userstate.bits;
    const username = userstate['display-name'];
    
    if(bits) {
        const listbits = [`و اخيرًا ابو صنادح بيشتري لي بندق  `,`لقد أضفت الكثير لحياتي، !`,`أشكرك على كرمك وسخاءك!`,`لقد أدخلت السعادة على قلبي، !`,`تقديري لك وشكري العميق!`,`أشكر الله على وجودك في حياتي!`,`شكرًا لكل المجهود الذي بذلته!`, `لقد جعلت يومي أفضل، !`,`مليت وانا اطلب من بابا يشري لي سوني 5 ويقول ماعنده😢.. الله يسعدك يا @${username} على الدعم بتساعدني على اقناع بابا 😘`,` ماما خديجة ازعجتنا وهي تبي مكنسة روبوتية 🧹😒، بهذا الدعم ساعدتنا اننا نسكتها ونجيب لها المكنسة شكرا لك والله يسعدك 🥰`,` اخيييرا بهذا الدعم اقدر اقنع بابا يشري لي بي سي مثل حقه ابي ابدأ ابث مثله 😭، شكرا الله يكثر خيرك 🥹`,` شكرًا لك على إسعادي وجعل يومي أفضل`,`لا أعرف كيف أعبر عن شكري لك`,` أنا ممتن لحسن قلبك وسخاءك`,` شكرًا لك على مساعدتي ودعمي`,`أنا ممتن لكل شيء قدمته لي دون مقابل`,` أشعر بالامتنان والشكر لكل ما تفعله لي`,`شكرًا لك على إدخال السعادة والفرح إلى حياتي`,`لا يمكنني أن أعبر عن شكري الكبير لك بكلمات`,`شكرًا لك على كل المجهود الذي بذلته من أجلي`,` لقد أدخلت النور والسعادة إلى حياتي`,` شكرًا لك على تقديم الدعم والمساندة اللازمة`,`شكرًا لك على إدخال الأمل والتفاؤل إلى حياتي`,`شكرًا لك على إسعادي وجعلني أشعر بالأمان والراحة`,`لا يمكنني أن أعرف كيف أعيش دون ما قدمته لي`,`شكرًا لك على الوقت والجهد الذي قدمته لي`,` أشعر بالامتنان والشكر لكل ما قدمته لي من قبل`,`شكرًا لك على إظهار الصدق والإخلاص في علاقتك معي`,`لا يمكنني الاستغناء عن ما قدمته لي في أوقات الحاجة`,]

 let randomElementbits = listbits[Math.floor(Math.random()*listbits.length)]
              
 console.log(randomElementbits)
    client.say(channel,`${listbits[Math.floor(Math.random()*listbits.length)]} وشكرا على ${bits} بتس, يا @${username}`)}
    if(bits == '101') {
        client.say(channel,`حيواواواوواووانااتت herodevil77dance  `)
    }

});

// استدعاء حدث stream-up
client.on('stream-up', (channel, username) => {
    // الكود الذي سيتفعل عند بدء البث
    console.log(`${username} has started streaming on ${channel}`);
    // هنا يمكنك وضع أي كوماند تريد تنفيذه عند بدء البث
    client.say(channel, 'مرحباً بالجميع، تم بدء البث!');
  });
  
  // استدعاء حدث stream-down
  client.on('stream-down', (channel, username) => {
    // الكود الذي سيتفعل عند انتهاء البث
    console.log(`${username} has stopped streaming on ${channel}`);
    // هنا يمكنك وضع أي كوماند تريد تنفيذه عند انتهاء البث
    client.say(channel, 'شكراً لمشاهدتكم جميعاً، تم انتهاء البث!');
  });
  
  // استدعاء حدث stream-change
  client.on('stream-change', (channel, username, status, game) => {
    // الكود الذي سيتفعل عند تغيير حالة البث
    console.log(`${username} has changed their stream status to "${status}" playing ${game} on ${channel}`);
    // هنا يمكنك وضع أي كوماند تريد تنفيذه عند تغيير حالة البث
    client.say(channel, `${username} changed their stream status to "${status}" playing ${game}`);
  });


 /*  let startTime;

  client.on('message', (channel, tags, message, self) => {
    if (message === '!start') {
      startTime = Date.now();
      client.say(channel, 'Timer started!');
    }
  });

  let intervalId;

client.on('message', (channel, tags, message, self) => {
  if (message === '!start') {
    startTime = Date.now();
    intervalId = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      client.say(channel, `Elapsed time: ${elapsedTime} seconds`);
    }, 1000);
    client.say(channel, 'Timer started!');
  }

  if (message === '!stop') {
    clearInterval(intervalId);
    client.say(channel, 'Timer stopped!');
  }
}); */


const choices = ['rock', 'paper', 'scissors'];

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return 'You win!';
      } else {
        return '3nb wins!';
      }
    }


client.on('message', (channel, userstate, message, self) => {
  if (self) return;

  const sender = userstate.username;
  const userChoice = message.toLowerCase();

  if (choices.includes(userChoice)) {
    const computerChoice = getRandomChoice();
    const result = determineWinner(userChoice, computerChoice);
    client.say(channel, `@${sender}, you chose ${userChoice}, 3nb chose ${computerChoice}. Result: ${result}`);
  } 

});

const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

client.on('message', (channel, userstate, message, self) => {
    if (self) return;
  
    if (message.toLowerCase() === '!startgame') {
      const targetNumber = generateRandomNumber();
      client.say(channel, 'لعبة الرقم العشوائي قد بدأت!');
  
      const user = userstate['display-name'];
  
      const gameLoop = async () => {
        client.say(channel, `@${user} اخمن الرقم بين 1 و 10 باستخدام !guess`);
        
        const correctAnswer = targetNumber.toString();
        const userGuessInput = await new Promise(resolve => {
          client.on('message', (channel, userstate, message, self) => {
            if (self) return;
            if (userstate['display-name'] === user && message.startsWith('!guess')) {
              const userGuess = message.split(' ')[1];
              resolve(userGuess);
            }
          });
        });
  
        if (userGuessInput === correctAnswer) {
          client.say(channel, `تهانينا! @${user} لقد فزت! الرقم الصحيح هو ${correctAnswer}`);
          winnersList.push(userstate.username);
          io.emit('updateWinnersList', winnersList); // تحديث الموقع
        } else {
          client.say(channel, `للأسف! @${user} الرقم الصحيح هو ${correctAnswer}`);
        }
      };
  
      gameLoop();
    }
  });

  client.on('message', onMessageHandler);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function onMessageHandler(target, context, msg, self) {
    if (self) return;
  
    if (msg.toLowerCase() === '!randomnumbers') {
      const num1 = getRandomNumber(1, 3);
      const num2 = getRandomNumber(1, 3);
      const num3 = getRandomNumber(1, 3);
  
      let response;
      let outcome;
  
      if (num1 === num2 && num2 === num3) {
        outcome = 'لقد فزت!';
      } else {
        outcome = 'لقد خسرت!';
      }
  
      response = `الأرقام العشوائية: ${num1}, ${num2}, ${num3}. ${outcome}`;
  
      client.say(target, response);
    }
  }
  
  client.on('message', onMessageHandler2);
  
  /* client.on('connected', (addr, port) => {
    console.log(`تم الاتصال بالبوت على ${addr}:${port}`);
  });
 */
  const winnersList = [];

  function getRandomLetter() {
    /* const alphabet = 'abcdefghijklmnopqrstuvwxyz'; */
    const randomIndex = Math.floor(Math.random() * list2.length);
    return list2[randomIndex];
  }
  
  function onMessageHandler2(target, context, msg, self) {
    if (self) return;
  
    if (msg.toLowerCase() === 'حظي؟') {
      const letter1 = getRandomLetter();
      const letter2 = getRandomLetter();
      const letter3 = getRandomLetter();
  
      let response;
      let outcome;
      
      if (letter1 === letter2 && letter2 === letter3) {
        outcome = 'We have a winner We will register your name in the list of winners';
        winnersList.push(context.username);
        io.emit('updateWinnersList', winnersList); // تحديث الموقع
      } else {
        outcome = 'Try again';
      }
  
      response = `@${context.username} ${letter1} ${letter2} ${letter3} ${outcome}`;
  
      client.say(target, response);
  } else if (msg.toLowerCase() === '!list') {
    const winners = winnersList.join(', ');
    client.say(target, `الفائزون حتى الآن: ${winners}`);
  } else if (msg.toLowerCase().startsWith('!اطرد')) {
    if(context.username == 'eiadu') {
    const args = msg.split(' ');
    const removeUsername = args[1];

    const index = winnersList.indexOf(removeUsername);
    if (index !== -1) {
      winnersList.splice(index, 1);
      client.say(target, `تمت إزالة ${removeUsername} من القائمة.`);
      io.emit('updateWinnersList', winnersList); // تحديث الموقع
    } else {
      client.say(target, `${removeUsername} غير موجود في القائمة.`);
    }} else {
      client.say(channel, `@${context.username} مب على كيفك تطرد الناس `);
    } 
  }
} 
  
const targetMessage = 'herodevilAKAFBI';
const targetCount = 5;
let messageCount = 0;
let participants2 = new Set();

client.on('message', (channel, user, message, self) => {
  if (self) return;

  if (message.trim() === targetMessage) {
    participants2.add(user.username);
    messageCount++;

    if (messageCount >= targetCount) {
      // Perform your desired action here
      const participantList = Array.from(participants2).join(', ');
      client.say(channel,`نعم يخوان ابي انام لا تتصلون ${participantList} `);
      // You can replace the console.log with your own action
    }
  }
});

const usersWhoSaidHi = [];

client.on('message', (channel, userstate, message, self) => {
  if (message.toLowerCase().includes('سلام') && !self) {
    const username = userstate.username;
    if (!usersWhoSaidHi.includes(username)) {
      usersWhoSaidHi.push(username);
      console.log(`${username} قال "hi" في الشات.`);
    }
  }
  
  if (message.toLowerCase() === '!عرض') {
    const userList = usersWhoSaidHi.join(', ');
    client.say(channel, `الاشخاص الي سلمو الى الان ${userList}`);
  }
});

client.on('message', (channel, userstate, message, self) => {
    if (self) return;
  
    if (userstate['message-type'] === 'whisper') {
      if (message.includes('herodevil3')) { // التحقق مما إذا كانت الرسالة تحتوي على "هل"
        client.whisper(`@${userstate.username}, كيف يمكنني مساعدتك؟`);
      }
      
      client.say('#herodevil777', `تم إرسالها من قبل ${userstate.username}: ${message}`);
    }
  });

  const moment = require('moment-timezone');

  // تحديد التوقيت المطلوب
  const RiyadhTimezone = 'Asia/Riyadh';
  
  let startTime;
  let isTiming = false;
  let firstMessageSent = ''; // تتبع أول رسالة تم إرسالها
  
  client.on('message', (channel, userstate, message, self) => {
    // تحقق مما إذا كان المستخدم مشرفًا أو صاحب البث
    const isModerator = userstate['user-type'] === 'mod';
    const isBroadcaster = userstate.username === 'herodevil777';
  
    // تجاوب مع الأوامر هنا للمشرفين وصاحب البث
    if (isModerator || isBroadcaster) {
      if (message.toLowerCase() === '!راح') {
        if (!isTiming) {
          const currentTime = moment().tz(RiyadhTimezone).format('YYYY-MM-DD HH:mm:ss');
          firstMessageSent = `تركي ترك البث في الساعة : ${currentTime}`;
          startTime = moment().tz(RiyadhTimezone);
          isTiming = true;
          client.say(channel, firstMessageSent);
        } else {
          client.say(channel, firstMessageSent);
        }
      }
  
      if (message.toLowerCase() === '!رجع') {
        if (isTiming) {
          const currentTime = moment().tz(RiyadhTimezone).format('YYYY-MM-DD HH:mm:ss');
          const endTime = moment().tz(RiyadhTimezone);
          const uptime = moment.duration(endTime.diff(startTime));
          const hours = uptime.hours();
          const minutes = uptime.minutes();
          const seconds = uptime.seconds();
  
          const uptimeString = `${hours}h ${minutes}m ${seconds}s`;
  
          client.say(channel, `herodevil777 HAS BEEN AFK  ${uptimeString}`);
  
          startTime = null;
          isTiming = false;
          firstMessageSent = '';
        }
      }
    } else {
      // الرد الثاني متاح للجميع بنفس الوقت الأول
      if (message.toLowerCase() === '!راح'  && firstMessageSent !== '') {
        client.say(channel, firstMessageSent);
      }
    }
  });
  


  /* const names = [
    "Herodevil777", "3nb77", "Xiriyadh", "Wizebot", "6_iqp", "Akafbi1", "EIADu", "Fssool__kenpachi", 
    "Shayeb7lo", "Rsh4485", "Nightbot", "R_kan1", "Ox_5p", "Omar_san", "3mo_90", "Xiarmin", 
    "Mogiwara_ahmed", "Moha99aa", "Narikoboy_777", "Salem_al3nzy", "Nawafi_3", "Qxs24", "01ella", 
    "7bvllet", "7ga_l", "Abdullah_n90", "Abdullahk_2", "Abo_saleh119", "Abu_hajoos", 
    "Ahahahahhhhahahahahah", "Ahmed10_ln", "Anotherttvviewer", "Bfnt", "Bin_talal", "Bngo80", 
    "Commanderroot", "Cora900", "Discord4small_streamers", "Dragigamee", "Drapsnatt", "Elbulldozer_", 
    "Elysian", "F_society_k", "Fahadksa200", "Foka", "Goonx71", "Gz_vlog", "Hsheshha", "Iinolx", 
    "Irampage88", "Joshua_322", "Jumaaqtr", "Justmazen_", "Jwan_si", "Kakaroto01t", "Kattah", 
    "Kenshiro_png", "Leveltt", "Life3jeep", "Liyaso", "Llyonko", "Mohammed1422116", "Mugiwaraboy56", 
    "Noxioushead", "Omardaas90", "Richard9oipjx", "Rogueg1rl", "Salx5", "Shankooti", "Shouq", 
    "Sita_90", "Streamers_social_space", "Uchiha_faris", "Vr2kan", "Zeinitsu", "Zooz41", "Zoro_nu_one", "MEEMY90", "mugiwara911", "Kisuke_237","Rv0la", "Rraed_"
  ];

  client.on('message', (channel, user, message, self) => {
    if(self) return;

  

  const randomName1 = names[Math.floor(Math.random() * names.length)];
  
  
  

  if(message == "كف؟") {
    client.say(channel, `@${randomName1} سطرك كف  @${user.username}`);
  }

  if(message == "زواج؟") {
    client.say(channel, `@${randomName1} اعرس عليك @${user.username}`);
  }

  if(message == "طلاق؟") {
    client.say(channel, `@${randomName1} انت طالق @${user.username}`);
  }

  if(message == "بقس؟") {
    client.say(channel, `@${randomName1} بقسك @${user.username}`);
  }

  }) */

  /* 
  const moment = require('moment');
  
  // تعريف معلومات البوت وإعدادات الاتصال بخدمة تويتش
  const opts = {
    identity: {
      username: '3nb77',
      password: 'oauth:mig75mplrvicwifozvrbivl51h2amc' // يمكن الحصول عليه من https://twitchapps.com/tmi/
    },
    channels: [
      'herodevil777'
    ]
  };
  
  const targetTime = moment('2023-08-29 16:44:00');

// تنسيق الزمن
function formatDuration(duration) {
  return ` ${duration.hours()} ساعات, ${duration.minutes()} دقائق, ${duration.seconds()} ثواني`;
}

// إرسال الوقت كل 15 دقيقة
const timeInterval = 15 * 60 * 1000; // بالمللي ثانية (15 دقيقة)
setInterval(() => {
  const currentTime = moment();
  const timeDifference = moment.duration(currentTime.diff(targetTime));
  const formattedTime = formatDuration(timeDifference);

  client.say(opts.channels[0], ` مر من الوقت: ${formattedTime} ⏰`);
}, timeInterval);

client.on('message', (channel, userstate, message, self, viewers) => {
  if (self) return;

  if (message.toLowerCase() === 'بدا؟') {
    const currentTime = moment();
    const timeDifference = moment.duration(currentTime.diff(targetTime));
    const formattedTime = formatDuration(timeDifference);

    client.say(opts.channels[0], ` مر من الوقت: ${formattedTime} ⏰`);
  }}); */


   client.on('raided', (channel, username, viewers) => {
    const message = `شكراً ${username} على الRaid ب ${viewers} مشاهد! أهلاً بكم جميعًا في البث! 🎉`;
    client.say(channel, message);
  });
  

  /* client.on('message', (target, context, msg, self) => {
    if (self) return; // تجاهل رسائل البوت الخاصة

    // التحقق من الأمر المطلوب
    if (msg.trim() === 'كف؟') {
        // جلب البيانات من URL المحدد بدون معرف المشرف
        fetch(`https://commands.garretcharp.com/twitch/chatter/${target.slice(1)}`)
            .then(response => response.text())
            .then(data => { 
                // إرسال الرد في الشات
                client.say(target, `@${context.username} سطرك كف @${data}`);
            })
            .catch(err => {
                console.error(err);
                client.say(target, 'حدث خطأ أثناء جلب البيانات.');
            });
    }
    if (msg.trim() === 'بقس؟') {
      // جلب البيانات من URL المحدد بدون معرف المشرف
      fetch(`https://commands.garretcharp.com/twitch/chatter/${target.slice(1)}`)
          .then(response => response.text())
          .then(data => { 
              // إرسال الرد في الشات
              client.say(target, `@${context.username} بقسك ${data}`);
          })
          .catch(err => {
              console.error(err);
              client.say(target, 'حدث خطأ أثناء جلب البيانات.');
          });
  }

  if (msg.trim() === 'زواج؟') {
    // جلب البيانات من URL المحدد بدون معرف المشرف
    fetch(`https://commands.garretcharp.com/twitch/chatter/${target.slice(1)}`)
        .then(response => response.text())
        .then(data => { 
            // إرسال الرد في الشات
            client.say(target, `@${context.username} اعرس عليك @${data}`);
        })
        .catch(err => {
            console.error(err);
            client.say(target, 'حدث خطأ أثناء جلب البيانات.');
        });
}
if (msg.trim() === 'طلاق؟') {
  // جلب البيانات من URL المحدد بدون معرف المشرف
  fetch(`https://commands.garretcharp.com/twitch/chatter/${target.slice(1)}`)
      .then(response => response.text())
      .then(data => { 
          // إرسال الرد في الشات
          client.say(target, `@${context.username} انت طالق @${data}`);
      })
      .catch(err => {
          console.error(err);
          client.say(target, 'حدث خطأ أثناء جلب البيانات.');
      });
}
if (msg.trim() === 'حضن؟') {
  // جلب البيانات من URL المحدد بدون معرف المشرف
  fetch(`https://commands.garretcharp.com/twitch/chatter/${target.slice(1)}`)
      .then(response => response.text())
      .then(data => { 
          // إرسال الرد في الشات
          client.say(target, `@${context.username}  حضنك @${data}`);
      })
      .catch(err => {
          console.error(err);
          client.say(target, 'حدث خطأ أثناء جلب البيانات.');
      });
}
}); */


  const usersList = [];
  // رصد الدردشة والتعرف على ذكر الكلمة "go"
  
  const EIADu = "EIADu"; // اسم المستخدم الذي يمكنه استخدام أمر !حدث

client.on('message', (channel, userstate, message, self) => {
  // تجاهل الرسائل الصادرة عن البوت نفسه
  if (self) return;

  if (message.includes('!حدث') && userstate.username.toLowerCase() === EIADu.toLowerCase()) {
    usersList.length = 0; // يفرغ القائمة بشكل كامل
    client.say(channel, `@${EIADu} تم تحديث القائمة بنجاح.`);
    return; // تجنب استمرار التفاعل مع هذه الرسالة
  }

  // إضافة اسم المستخدم إلى القائمة إذا لم يكن موجودًا
  if (!usersList.includes(userstate.username)) {
    usersList.push(userstate.username);
    io.emit('updateUsersList', usersList);
  }

  if (message.includes('كشف') && userstate.username.toLowerCase() === EIADu.toLowerCase()) {
    client.say(channel, `${usersList}`);
  }

  const randomIndex = Math.floor(Math.random() * usersList.length);
    const randomUserName = usersList[randomIndex];

  // إذا تم ذكر كلمة "go" في الرسالة
  if (message.includes('كف؟')) {
    // اختر اسمًا عشوائيًا من القائمة وأرسله في الدردشة
    client.say(channel, `@${randomUserName} عطاك كف @${userstate.username}`);
  }
  if(message == "زواج؟") {
    client.say(channel, `@${randomUserName} اعرس عليك  @${userstate.username}`);
  }

  if(message == "طلاق؟") {
    client.say(channel, `@${randomUserName} انت طالق @${userstate.username}`);
  }

  if(message == "بقس؟") {
    client.say(channel, `@${randomUserName} بقسك @${userstate.username}`);
  }

  if(message == "حظن؟") {
    client.say(channel, `@${randomUserName} حضنك @${userstate.username}`);
  }

  if(message == "بوسه؟") {
    client.say(channel, `@${randomUserName} اعطاك بوسه @${userstate.username}`);
  }

  if(message == "قتل؟") {
    client.say(channel, `@${randomUserName} يبي يقتلك انتبه على نفسك @${userstate.username}`);
  }

  if(message == "طعن؟") {
    client.say(channel, `@${randomUserName} طعنك @${userstate.username}`);
  }

});

setInterval(() => {
  usersList.length = 0; // يفرغ القائمة بشكل كامل
}, 6 * 60 * 60 * 1000); // 6 ساعات بالمللي ثانية


  setInterval(() => {
    if (usersList.length > 0) {
      const nonNightbotUsers = usersList.filter(username => username.toLowerCase() !== 'nightbot');
      if (nonNightbotUsers.length > 0) {
        const randomIndex = Math.floor(Math.random() * nonNightbotUsers.length);
        const randomUserName = nonNightbotUsers[randomIndex];
        client.say(channel,`@${randomUserName} ${list8[Math.floor(Math.random()*list8.length)]}`);
      }
    }
  }, 10 * 60 * 1000); // 10 دقائق بالمللي ثانية
  



  
/* const StreamlabsSocketClient = require('streamlabs-socket-client');

const twitchConfig = {
  identity: {
    username: '3nb77',
    password: 'oauth:mig75mplrvicwifozvrbivl51h2amc' // Generate this from https://twitchapps.com/tmi/
  },
  channels: ['EIADu']
};

const streamlabsConfig = {
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkUxRTc4OEJGNTE1M0I3Q0M5QjQ3IiwicmVhZF9vbmx5Ijp0cnVlLCJwcmV2ZW50X21hc3RlciI6dHJ1ZSwidHdpdGNoX2lkIjoiMjgwNTYzNzA0In0.2uAjiPhE9gaCSqGIIh2fTEkrTaeOV6q639rz6VrgBFU' // Generate this from Streamlabs API
};

const streamlabs = new StreamlabsSocketClient(streamlabsConfig);
streamlabs.connect();

// معالج للاشتراكات
client.on('subscription', (channel, username, methods, message, userstate) => {
  // قم بتنفيذ الاستجابة المناسبة هنا
});

// معالج للتبرعات
streamlabs.on('donation', eventData => {
  // قم بتنفيذ الاستجابة المناسبة هنا
});

// معالج للبتات
client.on('cheer', (channel, userstate, message) => {
  // قم بتنفيذ الاستجابة المناسبة هنا
});

streamlabs.on('donation', eventData => {
  const donationAmount = eventData.amount; // افترض أن هذه هي قيمة التبرع

  if (donationAmount >= 50) {
    // زيادة التايمر بمقدار 5 دقائق
  }
}); */



let currentWord = '';
let guessedLetters = [];
let wrongAttempts = 0;
const maxAttempts = 5;
let gameStarter = '';
let correctGuesser = '';
let gameTimer; // المؤقت لحساب الزمن

const wordsList = [
  'APPLE', 'ORANGE', 'BANANA', 'STRAWBERRY', 'WATERMELON',
  'PINEAPPLE', 'GRAPE', 'LEMON', 'PEACH', 'KIWI',
  'BLUEBERRY', 'BLACKBERRY', 'RASPBERRY', 'COCONUT', 'MANGO',
  'CHERRY', 'APRICOT', 'NECTARINE', 'PAPAYA', 'FIG',
  'PLUM', 'CANTALOUPE', 'HONEYDEW', 'LYCHEE', 'CARAMBOLA',
  'DRAGONFRUIT', 'PASSIONFRUIT', 'GUAVA', 'TANGERINE', 'LIME',
  'GRAPEFRUIT', 'JACKFRUIT', 'KIWANO', 'MANDARIN', 'PERSIMMON',
  'STARFRUIT', 'UGLIFRUIT', 'YUZU', 'ZUCCHINI', 'AVOCADO',
  'BROCCOLI', 'CARROT', 'CUCUMBER', 'EGGPLANT', 'GARLIC',
  'KALE', 'LETTUCE', 'MUSHROOM', 'ONION', 'PEPPER',
  'POTATO', 'PUMPKIN', 'SPINACH', 'SQUASH', 'TOMATO',
  'ARTICHOKE', 'ASPARAGUS', 'BEETROOT', 'CELERY', 'RADISH',
  'RHUBARB', 'TURNIP', 'WATERCRESS', 'BASIL', 'CILANTRO',
  'DILL', 'MINT', 'OREGANO', 'PARSLEY', 'ROSEMARY',
  'SAGE', 'THYME', 'CHAMOMILE', 'EUCALYPTUS', 'LAVENDER',
  'PEPPERMINT', 'SPEARMINT', 'VALERIAN', 'GINGER', 'TURMERIC',
  'CINNAMON', 'CLOVES', 'NUTMEG', 'ALLSPICE', 'CARDAMOM',
  'CORIANDER', 'FENNEL', 'SAFFRON', 'VANILLA', 'ANISE',
  'CHOCOLATE', 'CARAMEL', 'MARSHMALLOW', 'NUTELLA', 'PEANUT'
  // ويمكنك إضافة المزيد من الكلمات هنا
];

function getRandomWord() {
  return wordsList[Math.floor(Math.random() * wordsList.length)];
}

function displayWord() {
  let display = '';
  const separator = 'ᝢ '; // الرمز الذي سيتم استخدامه بين الكلمات

  for (let letter of currentWord) {
    if (guessedLetters.includes(letter) || letter === ' ') {
      if (letter === ' ') {
        display += separator; // استخدام الرمز بدلاً من المسافتين
      } else {
        display += letter + ' '; // مسافة واحدة بعد كل حرف
      }
    } else {
      display += '_ ';
    }
  }
  return display.trim();
}

let gameTimerWords = {}; // كائن لتخزين مؤقتات كل نسخة

function startTimerWords(channel) {
  clearTimeout(gameTimerWords); // إلغاء المؤقت الحالي إذا كان قيد التشغيل
  gameTimerWords = setTimeout(() => {
    if (currentWord !== '') {
      const formattedWord = currentWord.replace(/\s/g, ''); // إزالة المسافات
      client.say(channel, `Time's up! The word was: ${formattedWord}`);
      currentWord = '';
    }
  }, 90000); // 60 ثانية = دقيقة واحدة
}

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  const sender = tags.username;

  if (message.toLowerCase() === '!word' && gameStarter === '') {
    gameStarter = sender;
    currentWord = getRandomWord().toUpperCase();
    guessedLetters = [];
    wrongAttempts = 0;
    correctGuesser = '';
    console.log(` ${currentWord} `);
    client.say(channel, `${gameStarter}, Let's start! The word is: ${displayWord()}`);
    startTimerWords(channel);
  } else {
    guessWord(channel, sender, message);
  }

  if (currentWord === '') {
    gameStarter = '';
    correctGuesser = '';
  }
});

function guessWord(channel, sender, message) {
  if (currentWord !== '' && sender === gameStarter) {
    const formattedMessage = message.replace(/\s/g, ''); // إزالة المسافات
    if (formattedMessage.length === 1 && formattedMessage.match(/[a-zA-Z]/)) {
      // تخمين حرف
      const guessedLetter = formattedMessage.toUpperCase();
      handleGuessWord(channel, sender, guessedLetter);
    } else if (formattedMessage.length === currentWord.replace(/\s/g, '').length && formattedMessage.toUpperCase() === currentWord.replace(/\s/g, '')) {
      // تخمين الكلمة كاملة
      handleGuessWord(channel, sender, currentWord.replace(/\s/g, ''));
    } else {
      client.say(channel, `${sender}, please enter a valid guess. Current word: ${displayWord()}`);
    }
  }
}

function handleGuessWord(channel, sender, guess) {
  if (!guessedLetters.includes(guess)) {
    guessedLetters.push(...guess);
    if (currentWord.replace(/\s/g, '').includes(guess)) {
      if (displayWord().indexOf('_') === -1) {
        winnersList.push(sender); // إضافة الفائز إلى قائمة الفائزين
        io.emit('updateWinnersList', winnersList); // تحديث الموقع
        client.say(channel, `Congratulations, ${sender}! You guessed the word: ${currentWord}`);
        currentWord = '';
      } else {
        client.say(channel, `Good guess, ${sender}! Current word: ${displayWord()}`);
        correctGuesser = sender;
      }
    } else {
      wrongAttempts++;
      if (wrongAttempts < maxAttempts) {
        client.say(channel, `Wrong guess, ${maxAttempts - wrongAttempts} attempts left. Current word: ${displayWord()}`);
      } else {
        client.say(channel, `Sorry, ${gameStarter}! You lost. The word was: ${currentWord}`);
        currentWord = '';
      }
    }
  } else {
    client.say(channel, `${sender}, you've already guessed '${guess}'. Current word: ${displayWord()}`);
  }
}






let currentWord2 = '';
let guessedLetters2 = [];
let wrongAttempts2 = 0;
const maxAttempts2 = 5;
let gameStarter2 = '';
let correctGuesser2 = '';
let gameTimer2; // المؤقت لحساب الزمن

const wordsList2 = [
  'NARUTO', 'BLEACH', 'ONE PIECE', 'DRAGON BALL',
  'DEATH NOTE', 'MY HERO ACADEMIA', 'TOKYOGHOUL', 'FULLMETAL ALCHEMY', 'SWORDARTONLINE',
  'NEON GENESIS EVANGELION', 'FAIRYTAIL', 'POKEMON', 'ONE PUNCH MAN', 'HUNTER X HUNTER',
  'COWBOY BEBOP', 'BLACK CLOVER', 'DEMON SLAYER', 'BLENDERS', 'JOJOS BIZARRE ADVENTURE',
  'REZERO', 'GURRENLAGANN', 'STEINS GATE', 'ATTACK ON TITAN', 'YOUR NAME',
  'SPIRITED AWAY', 'PRINCESS MONONOKE', 'KIMI NO NAWA', 'JUJUTSU KAISEN', 'DARLING IN THE FRANXX',
  'FATE ZERO NIGHT', 'VIOLET EVERGARDEN', 'KONOSUBA', 'KILL LA KILL', 'FAIRY TAIL',
  'BLACK BUTLER', 'ASSASSINATION CLASSROOM', 'ANGEL BEATS', 'DEMON SLAYER', 'GINTAMA',
  'CODE GEASS', 'SOUL SUCKER PUNCH', 'DARLING IN THE FRANXX', 'STEINSGATE', 'DR STONE',
  'THE TATAMI GALAXY', 'TRIGUN', 'GREAT TEACHER ONIZUKA', 'COWBOY BEBOP', 'PROMISED NEVERLAND',
  'SERAPH OF END', 'NEON GENESIS EVANGELION', 'NORAGAMI', 'BUNGO STRAY DOGS',
  'TOKYO GHOUL', 'PARASYTE', 'MADE IN ABYSS', 'DEVILMAN CRYBABY', 'GURREN LAGANN',
  'FIRE FORCE', 'MOB PSYCHO', 'HIGH SCORE GIRL', 'ERASED', 'DOROHEDORO',
  'LAND OF THE LUSTROUS', 'BLACK LAGOON', 'DANGANRONPA', 'AJIN', 'MAGI',
  'OVERLORD', 'FLCL', 'DURARARA', 'HAIKYU', 'BLACK CLOVER',
  'CLANNAD', 'BACCANO', 'KILLING STALKING', 'GANGSTA', 'BERSERK',
  'TOKYO RAVENS', 'ELFEN LIED', 'KAKEGURUI', 'CLAYMORE', 'FRUITS BASKET',
  'YURI ON ICE', 'HIGH SCHOOL DXD', 'PUELLA MAGI MADOKA MAGICA', 'SAILOR MOON', 'PSYCHO PASS',
  'STUDIO GHIBLI', 'DEATH PARADE', 'SPACE BROTHERS', 'SPACE DANDY', 'NANATSU NO TAIZAI',
  'WATAMOTE', 'HELLSING', 'KUROKO NO BASKET', 'SAIKI K', 'MARCH COMES IN LIKE A LION',
  'HIGH SCHOOL OF THE DEAD', 'ANGEL BEATS', 'TENGEN TOPPA GURREN LAGANN', 'FATE STAY NIGHT', 'DRIFTERS','DETECTIVE CONAN'
  // ويمكنك إضافة المزيد من الأسماء هنا
];

function getRandomWord2() {
  return wordsList2[Math.floor(Math.random() * wordsList2.length)];
}

function displayWord2() {
  let display = '';
  const separator = 'ᝢ '; // الرمز الذي سيتم استخدامه بين الكلمات

  for (let letter of currentWord2) {
    if (guessedLetters2.includes(letter) || letter === ' ') {
      if (letter === ' ') {
        display += separator; // استخدام الرمز بدلاً من المسافتين
      } else {
        display += letter + ' '; // مسافة واحدة بعد كل حرف
      }
    } else {
      display += '_ ';
    }
  }
  return display.trim();
}

let gameTimerAnime = {}; // كائن لتخزين مؤقتات كل نسخة

function startTimerAnime(channel) {
  clearTimeout(gameTimerAnime); // إلغاء المؤقت الحالي إذا كان قيد التشغيل
  gameTimerAnime = setTimeout(() => {
    if (currentWord2 !== '') {
      const animeName = currentWord2.replace(/\s/g, ''); // إزالة المسافات
      client.say(channel, `Time's up for Anime! The anime was: ${animeName}`);
      currentWord2 = '';
    }
  }, 90000); // 60 ثانية = دقيقة واحدة
}

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  const sender2 = tags.username;

  if (message.toLowerCase() === '!anime' && gameStarter2 === '') {
    gameStarter2 = sender2;
    currentWord2 = getRandomWord2().toUpperCase();
    guessedLetters2 = [];
    wrongAttempts2 = 0;
    correctGuesser2 = '';
    console.log(` ${currentWord2} `);
    client.say(channel, `${gameStarter2}, Let's start! The anime is: ${displayWord2()}`);
    startTimerAnime(channel);
  } else {
    guessAnime(channel, sender2, message);
  }

  if (currentWord2 === '') {
    gameStarter2 = '';
    correctGuesser2 = '';
  }
});

function guessAnime(channel, sender, message) {
  if (currentWord2 !== '' && sender === gameStarter2) {
    const formattedMessage = message.replace(/\s/g, ''); // إزالة المسافات
    if (formattedMessage.length === 1 && formattedMessage.match(/[a-zA-Z]/)) {
      // تخمين حرف
      const guessedLetter2 = formattedMessage.toUpperCase();
      handleGuess(channel, sender, guessedLetter2);
    } else if (formattedMessage.length === currentWord2.replace(/\s/g, '').length && formattedMessage.toUpperCase() === currentWord2.replace(/\s/g, '')) {
      // تخمين الكلمة كاملة
      handleGuess(channel, sender, currentWord2.replace(/\s/g, ''));
    } else {
      client.say(channel, `${sender}, please enter a valid guess. Current anime: ${displayWord2()}`);
    }
  }
}

function handleGuess(channel, sender, guess) {
  if (!guessedLetters2.includes(guess)) {
    guessedLetters2.push(...guess);
    if (currentWord2.replace(/\s/g, '').includes(guess)) {
      if (displayWord2().indexOf('_') === -1) {
        winnersList.push(sender); // إضافة الفائز إلى قائمة الفائزين
        io.emit('updateWinnersList', winnersList); // تحديث الموقع
        client.say(channel, `Congratulations, ${sender}! You guessed the anime: ${currentWord2}`);
        currentWord2 = '';
      } else {
        client.say(channel, `Good guess, ${sender}! Current anime: ${displayWord2()}`);
        correctGuesser2 = sender;
      }
    } else {
      wrongAttempts2++;
      if (wrongAttempts2 < maxAttempts2) {
        client.say(channel, `Wrong guess, ${maxAttempts2 - wrongAttempts2} attempts left. Current anime: ${displayWord2()}`);
      } else {
        client.say(channel, `Sorry, ${gameStarter2}! You lost. The anime was: ${currentWord2}`);
        currentWord2 = '';
      }
    }
  } else {
    client.say(channel, `${sender}, you've already guessed '${guess}'. Current anime: ${displayWord2()}`);
  }
}


  

let currentWordArabic = '';
let guessedLettersArabic = [];
let wrongAttemptsArabic = 0;
const maxAttemptsArabic = 5;
let gameStarterArabic = '';
let correctGuesserArabic = '';
let gameTimerArabic; // المؤقت لحساب الزمن

const wordsListArabic = ['موز', 'مانجو', 'فراولة','مكة المكرمة', 'منزل',
 'غابة', 'جدول', 'تلفاز', 'جدار', 'جو', 'حاسوب', 'هاتف', 'شبكة',
'نافذة', 'ساعة', 'مذكرة', 'قلم', 'كتاب', 'قطار', 'طائرة', 'سفينة',
'حقيبة', 'مفتاح', 'سلم', 'قرش', 'لبنة', 'نجمة', 'قمر', 'بحيرة', 'نهر',
'شلال', 'دلو', 'فرشاة', 'معجون', 'شامبو', 'صابون', 'حامل', 'ستارة',
'قطعة', 'طبق', 'فنجان', 'صحن', 'قصة', 'حلم', 'شجرة', 'وردة', 'تفاحة',
'برتقالة', 'فراولة', 'جامعة', 'ماوس', 'كبسة', 'مندي', 'جوزهند',
'تلفزيون', 'انارة', 'شمس', 'بحر', 'جبل', 'وادي', 'حديقة', 'زهرة', 'جذع',
'سحابة', 'مطر', 'ثلج', 'ريح', 'عاصفة', 'رعد', 'برق', 'مدينة', 'قرية',
'دار', 'طاولة', 'كرسي', 'باب', 'سيارة', 'دراجة', 'سيارة', 'طبيعة',
'قطار', 'حافلة', 'مطار', 'محطة', 'مستشفى', 'مدرسة', 'جامعة', 'مكتبة',
'مسجد', 'كنيسة', 'معبد', 'سوق', 'محل', 'مطعم', 'كافيه', 'فندق', 'مسرح',
'متحف', 'حيوانات', 'منتزه', 'حفلة', 'زفاف', 'تخرج', 'مهرجان', 'ألعاب',
'كتاب', 'مجلة', 'صحيفة', 'رواية', 'قصة', 'شعر', 'تاريخ', 'جغرافيا',
'علم', 'رياضة', 'كرة', 'حذاء', 'قميص', 'سروال', 'جينز', 'قبعة', 'نظارات',
'هاتف', 'شاشة', 'كاميرا', 'سماعات', 'ماوس', 'قفل', 'محفظة',
'حقيبة', 'مظلة', 'بطاقة', 'طعام', 'شراب', 'فاكهة', 'خضار', 'لحم', 'حلوى',
'شوكولاتة'];

function getRandomWordArabic() {
  return wordsListArabic[Math.floor(Math.random() * wordsListArabic.length)];
}

function displayWordArabic() {
  let display = '';
  const separator = 'ᝢ '; // الرمز الذي سيتم استخدامه بين الكلمات

  for (let letter of currentWordArabic) {
    if (guessedLettersArabic.includes(letter) || letter === ' ') {
      if (letter === ' ') {
        display += separator; // استخدام الرمز بدلاً من المسافتين
      } else {
        display += letter + ' '; // مسافة واحدة بعد كل حرف
      }
    } else {
      display += '_ ';
    }
  }
  return display.trim();
}

let gameTimerWordsArabic = {}; // كائن لتخزين مؤقتات كل نسخة

function startTimerWordsArabic(channel) {
  clearTimeout(gameTimerWordsArabic); // إلغاء المؤقت الحالي إذا كان قيد التشغيل
  gameTimerWordsArabic = setTimeout(() => {
    if (currentWordArabic !== '') {
      const formattedWord = currentWordArabic.replace(/\s/g, ''); // إزالة المسافات
      client.say(channel, `انتهى الوقت! الكلمة كانت: ${formattedWord}`);
      currentWordArabic = '';
    }
  }, 90000); // 60 ثانية = دقيقة واحدة
}

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  const sender = tags.username;

  if (message.toLowerCase() === '!كلمة' && gameStarterArabic === '') {
    gameStarterArabic = sender;
    currentWordArabic = getRandomWordArabic();
    guessedLettersArabic = [];
    wrongAttemptsArabic = 0;
    correctGuesserArabic = '';
    console.log(` ${currentWordArabic} `);
    client.say(channel, `${gameStarterArabic}, هيا نبدأ! الكلمة هي: ${displayWordArabic()}`);
    startTimerWordsArabic(channel);
  } else {
    guessWordArabic(channel, sender, message);
  }

  if (currentWordArabic === '') {
    gameStarterArabic = '';
    correctGuesserArabic = '';
  }
});

function guessWordArabic(channel, sender, message) {
  if (currentWordArabic !== '' && sender === gameStarterArabic) {
    const formattedMessage = message.replace(/\s/g, ''); // إزالة المسافات
    if (formattedMessage.length === 1 && formattedMessage.match(/[ء-ي]/)) {
      // تخمين حرف
      const guessedLetter = formattedMessage.toUpperCase();
      handleGuessWordArabic(channel, sender, guessedLetter);
    } else if (formattedMessage.length === currentWordArabic.replace(/\s/g, '').length && formattedMessage.toUpperCase() === currentWordArabic.replace(/\s/g, '')) {
      // تخمين الكلمة كاملة
      handleGuessWordArabic(channel, sender, currentWordArabic.replace(/\s/g, ''));
    } else {
      client.say(channel, `${sender}, الرجاء إدخال تخمين صحيح. الكلمة الحالية: ${displayWordArabic()}`);
    }
  }
}

function handleGuessWordArabic(channel, sender, guess) {
  if (!guessedLettersArabic.includes(guess)) {
    guessedLettersArabic.push(...guess);
    if (currentWordArabic.replace(/\s/g, '').includes(guess)) {
      if (displayWordArabic().indexOf('_') === -1) {
        winnersList.push(sender); // إضافة الفائز إلى قائمة الفائزين
        io.emit('updateWinnersList', winnersList); // تحديث الموقع
        client.say(channel, `تهانينا، ${sender}! لقد حزرت الكلمة : ${currentWordArabic}`);
        currentWordArabic = '';
      } else {
        client.say(channel, `تخمين جيد، ${sender}! الكلمة الحالية : ${displayWordArabic()}`);
        correctGuesserArabic = sender;
      }
    } else {
      wrongAttemptsArabic++;
      if (wrongAttemptsArabic < maxAttemptsArabic) {
        client.say(channel, `تخمين خاطئ، ${maxAttemptsArabic - wrongAttemptsArabic} محاولات متبقية. الكلمة الحالية : ${displayWordArabic()}`);
      } else {
        client.say(channel, `عذرًا، ${gameStarterArabic}! لقد خسرت. كانت الكلمة : ${currentWordArabic}`);
        currentWordArabic = '';
      }
    }
  } else {
    client.say(channel, `${sender}, لقد قمت بتخمين '${guess}'. الكلمة الحالية : ${displayWordArabic()}`);
  }
}






/* 
const axios = require('axios');


let streamStartTime = Date.now();
let currentDuration = 0;

client.connect();

client.on('message', (channel, tags, message, self) => {
    if (self) return;

    if (message.toLowerCase() === '!uptime') {
        const now = Date.now();
        const uptime = now - streamStartTime;
        const hours = Math.floor(uptime / 3600000);
        const minutes = Math.floor((uptime % 3600000) / 60000);
        client.say(channel, `الوقت منذ بدء البث: ${hours} ساعة و ${minutes} دقيقة.`);
    }
});

function increaseStreamDuration(minutesToAdd) {
    currentDuration += minutesToAdd;
    // هنا يمكنك إضافة الإجراءات اللازمة عند زيادة مدة البث مثل تحديث العرض أو إعلان الزيادة.
}

// يتم استدعاء هذه الوظيفة عند استلام تبرع أو دعم مالي
function onDonationReceived(amount) {
    const minutesToAdd = amount / 5; // على سبيل المثال: زيادة 5 دقائق لكل وحدة مالية
    increaseStreamDuration(minutesToAdd);
}

// قم بتحديث هذا المتغير بالوقت المنقضي بشكل ملائم
let elapsedTime = "00:00";

// تحديث نص العداد الزمني كل ثانية
setInterval(() => {
    // قم بتحديث elapsedTime بالوقت المنقضي الجديد بصيغة مناسبة (مثلا: "HH:mm:ss")
    // يمكنك استخدام Date.now() أو أي منطق لحساب الوقت المنقضي
    // مثال: elapsedTime = calculateElapsedTime();
    
    // قم بتحديث النص لعرض الوقت المنقضي الجديد
    document.getElementById('اسم-مصدر-النص').innerText = `الوقت المنقضي: ${elapsedTime}`;
}, 1000); // تحديث كل ثانية (1000 ميلي ثانية)
 */






const fs = require('fs');



const timeFilePath = './time.json';

// قراءة الوقت من الملف إذا كان موجودًا، وإلا تعيين الوقت الافتراضي
let startTime2;
if (fs.existsSync(timeFilePath)) {
  const timeData = JSON.parse(fs.readFileSync(timeFilePath, 'utf8'));
  startTime2 = moment.tz(timeData, 'Asia/Riyadh');
} else {
  startTime2 = moment.tz('2024-04-12 9:13:35', 'Asia/Riyadh'); // تعيين الوقت المحدد بتوقيت الرياض
}

// حفظ الوقت إلى الملف
const saveTimeToFile = () => {
  fs.writeFileSync(timeFilePath, JSON.stringify(startTime2.format()), 'utf8');
};

// التفاعل مع الرسائل
client.on('message', (channel, userstate, message, self) => {
  const commandArabic = '!مر';
  const commandEnglish = '!time';
  const commandDayArabic = '!يوم';
  const commandDayEnglish = '!day';
  const increaseCommand = '!زيد';
  const decreaseCommand = '!نقص';

  const isMod = userstate.mod || userstate['user-type'] === 'mod';

  if (
    message.toLowerCase() === commandArabic ||
    message.toLowerCase() === commandEnglish
  ) {
    const currentTime = moment();
    const duration = moment.duration(currentTime.diff(startTime2));
    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes()) - hours * 60;
    const seconds = Math.floor(duration.asSeconds()) - hours * 3600 - minutes * 60;

    let timePassed = `${hours} ساعة و ${minutes} دقيقة و ${seconds} ثانية`;
    let responseMessage = '';

    if (message.toLowerCase() === commandEnglish) {
      timePassed = `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
      responseMessage = ` ${timePassed} `;
    } else {
      responseMessage = ` لقد مرّ من الوقت ${timePassed} `;
    }

    client.say(channel, responseMessage);
  } else if (message.toLowerCase() === commandDayArabic) {
    const currentTime = moment();
    const duration = moment.duration(currentTime.diff(startTime2));
    const days = Math.floor(duration.asDays());
    const hours = Math.floor(duration.asHours()) % 24;
    const minutes = Math.floor(duration.asMinutes()) % 60;
    const seconds = Math.floor(duration.asSeconds()) % 60;
    let timePassed2 = `${days} يوم و ${hours} ساعة و ${minutes} دقيقة و ${seconds} ثانية`;
    client.say(channel, ` لقد مرّ ${timePassed2}  `);
  } else if (message.toLowerCase() === commandDayEnglish) {
    const currentTime = moment();
    const duration = moment.duration(currentTime.diff(startTime2));
    const days = Math.floor(duration.asDays());
    const hours = Math.floor(duration.asHours()) % 24;
    const minutes = Math.floor(duration.asMinutes()) % 60;
    const seconds = Math.floor(duration.asSeconds()) % 60;
    timePassed3 = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
    client.say(channel, ` ${timePassed3}  `);
  } else if (message.startsWith(increaseCommand)) {
    if (!isMod) {
      client.say(channel, ` نعم اخوي وش زيد و نقص الرجاء الاتصال في وقت لاحق  `);
      return;
    }
    const timeToAdd = message.slice(increaseCommand.length).trim().split(' ');
    if (timeToAdd.length < 2) {
      client.say(channel, `الرجاء إضافة عدد الساعات أو الدقائق أو الثواني.`);
      return;
    }
    let time = moment.duration();
    for (let i = 0; i < timeToAdd.length; i += 2) {
      const value = parseInt(timeToAdd[i]);
      const unit = timeToAdd[i + 1];
      if (unit.includes('ساعة')) {
        time.add(value, 'hours');
      } else if (unit.includes('دقيقة')) {
        time.add(value, 'minutes');
      } else if (unit.includes('ثانية')) {
        time.add(value, 'seconds');
      }
    }
    startTime2.subtract(time); // تقليل الوقت المبدئي لزيادة الوقت المنقضي
    saveTimeToFile();
    client.say(channel, `تمت زيادة الوقت المنقضي بمقدار ${time.humanize()}`);
  } else if (message.startsWith(decreaseCommand)) {
    if (!isMod) {
      client.say(channel, `نعم اخوي وش زيد و نقص الرجاء الاتصال في وقت لاحق `);
      return;
    }
    const timeToRemove = message.slice(decreaseCommand.length).trim().split(' ');
    if (timeToRemove.length < 2) {
      client.say(channel, `الرجاء إضافة عدد الساعات أو الدقائق أو الثواني.`);
      return;
    }
    let time = moment.duration();
    for (let i = 0; i < timeToRemove.length; i += 2) {
      const value = parseInt(timeToRemove[i]);
      const unit = timeToRemove[i + 1];
      if (unit.includes('ساعة')) {
        time.add(value, 'hours');
      } else if (unit.includes('دقيقة')) {
        time.add(value, 'minutes');
      } else if (unit.includes('ثانية')) {
        time.add(value, 'seconds');
      }
    }
    startTime2.add(time); // زيادة الوقت المبدئي لتقليل الوقت المنقضي
    saveTimeToFile();
    client.say(channel, `تم تقليل الوقت المنقضي بمقدار ${time.humanize()}`);
  }
});






// التعامل مع الرسائل العادية
client.on('message', (channel, userstate, message, self) => {
  if (self || !message.startsWith('!احسب')) {
      return;
  }

  // فصل الأمر والقيمة من الرسالة
  const parts = message.split(' ');
  const amount = parseInt(parts[1]);
  const currencyType = parts[2] ? parts[2].toLowerCase() : '';
  const timeUnit = parts[3] ? parts[3].toLowerCase() : 'ثواني'; // افتراضي إلى ثواني

  // التحقق من وجود القيمة
  if (!amount || !currencyType) {
      client.say(channel, 'لم تحدد القيمة أو نوع العملة.');
      return;
  }

  // حساب الزمن وإرسال الرد
  const totalSeconds = calculateTime(amount, currencyType);
  const formattedTime = convertTime(totalSeconds, timeUnit, amount, currencyType);
  client.say(channel, formattedTime);
});


// الدالة لحساب الزمن بناءً على القيم المعطاة
function calculateTime(amount, currencyType) {
  let timeInSeconds;

  switch (currencyType) {
      case 'دولار':
          timeInSeconds = amount * 100;
          break;
      case 'بتس':
          timeInSeconds = amount * 1.2;
          break;
      case 'تير1':
          timeInSeconds = amount * 200;
          break;
      case 'تير2':
          timeInSeconds = amount * 250;
          break;
      case 'تير3':
          timeInSeconds = amount * 300;
          break;
      default:
          return 'يرجى تحديد نوع العملة (دولار، بتس، تير1، تير2، تير3)';
  }

  return timeInSeconds;
}

// الدالة لتحويل الوقت إلى الدقائق أو الساعات أو الثواني مع الرد المطلوب
function convertTime(totalSeconds, timeUnit, amount, currencyType) {
  let timeInDesiredUnit;
  let unitLabel;
/* 
  // التعامل مع التشجيعات (Cheer)
client.on('cheer', (channel, userstate) => {
  const bits = parseInt(userstate.bits);

  // حساب الوقت بناءً على البتس
  const totalSeconds = calculateTime(bits, 'بتس');
  const formattedTime = convertTime(totalSeconds, 'ثواني', bits, 'بتس');

  // إرسال الرسالة إلى الشات
  client.say(channel, `  الوقت المقابل هو ${totalSeconds/60} دقيقة `);
}); */


  switch (timeUnit) {
      case 'دقائق':
          timeInDesiredUnit = totalSeconds / 60;
          unitLabel = 'دقيقة';
          break;
      case 'ثواني':
      default:
          timeInDesiredUnit = totalSeconds;
          unitLabel = 'ثانية';
          break;
  }

  return `الوقت المقابل لـ ${amount} ${currencyType} هو ${timeInDesiredUnit} ${unitLabel}`;
}


const math = require('mathjs');

client.on('message', (channel, userstate, message, self) => {
  // تجنب التفاعل مع رسائل البوت نفسه
  if (self) return;

  // التحقق من أمر رياضي
  if (message.startsWith('!clc')) {
      // استخراج العملية الرياضية من الرسالة
      const operation = message.substring(5).trim();

      try {
          // حساب العملية الرياضية باستخدام mathjs وإرسال النتيجة
          const result = math.evaluate(operation);
          client.say(channel, `النتيجة: ${result}`);
      } catch (error) {
          // في حالة وجود أي خطأ أثناء التقييم
          client.say(channel, `حدث خطأ أثناء حساب العملية.`);
      }
  }
});


const words = [ 
  'منزل', 'غابة', 'جدول', 'تلفاز', 'جدار', 'جو', 'حاسوب', 'هاتف', 'شبكة',
  'نافذة', 'ساعة', 'مذكرة', 'قلم', 'كتاب', 'قطار', 'طائرة', 'سفينة',
  'حقيبة', 'مفتاح', 'سلم', 'قرش', 'لبنة', 'نجمة', 'قمر', 'بحيرة', 'نهر',
  'شلال', 'دلو', 'فرشاة', 'معجون', 'شامبو', 'صابون', 'حامل', 'ستارة',
  'قطعة', 'طبق', 'فنجان', 'صحن', 'قصة', 'حلم', 'شجرة', 'وردة', 'تفاحة',
  'برتقالة', 'فراولة', 'جامعة', 'ماوس', 'كبسة', 'مندي', 'جوزهند',
  'تلفزيون', 'انارة', 'شمس', 'بحر', 'جبل', 'وادي', 'حديقة', 'زهرة', 'جذع',
  'سحابة', 'مطر', 'ثلج', 'ريح', 'عاصفة', 'رعد', 'برق', 'مدينة', 'قرية',
  'دار', 'طاولة', 'كرسي', 'باب', 'سيارة', 'دراجة', 'سيارة', 'سفينة',
  'قطار', 'حافلة', 'مطار', 'محطة', 'مستشفى', 'مدرسة', 'جامعة', 'مكتبة',
  'مسجد', 'كنيسة', 'معبد', 'سوق', 'محل', 'مطعم', 'كافيه', 'فندق', 'مسرح',
  'متحف', 'حيوانات', 'منتزه', 'حفلة', 'زفاف', 'تخرج', 'مهرجان', 'ألعاب',
  'كتاب', 'مجلة', 'صحيفة', 'رواية', 'قصة', 'شعر', 'تاريخ', 'جغرافيا',
  'علم', 'رياضة', 'كرة', 'حذاء', 'قميص', 'سروال', 'جينز', 'قبعة', 'نظارات',
  'هاتف', 'شاشة', 'كاميرا', 'سماعات', 'ماوس', 'قفل', 'محفظة',
  'حقيبة', 'مظلة', 'بطاقة', 'طعام', 'شراب', 'فاكهة', 'خضار', 'لحم', 'حلوى',
  'شوكولاتة'
  // يمكنك إضافة المزيد من الكلمات العربية هنا
];

let chosenWord = '';
let correctAnswerGiven = false;
let gameStoppedManually = false;
let timesSent = 0;
let sentHints = [];
let stopSending = false;
let gameStarted = false;
let hintInterval;
let gameTimeout;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function restartGame() {
    clearInterval(hintInterval);
    clearTimeout(gameTimeout);
    timesSent = 0;
    sentHints = [];
    stopSending = false;
    gameStarted = false;
    correctAnswerGiven = false;
    gameStoppedManually = false;
}

function startGame() {
    if (gameStarted) return;

    restartGame();  // تأكد من إعادة تعيين كل شيء قبل بدء اللعبة

    chosenWord = words[Math.floor(Math.random() * words.length)];
    client.say(channel, `لعبة تخمين الكلمة بدأت! حاول تخمن الكلمة اللي بفكر فيها وكل 30 ثانية برسل تلميح.`); 

    const hints = [
        `التلميح: الكلمة تتكون من ${chosenWord.length} حروف.`,
        `التلميح: أول حرف من الكلمة هو { ${chosenWord.charAt(0)} }.`,
        `التلميح: آخر حرف من الكلمة هو { ${chosenWord.charAt(chosenWord.length - 1)} }.`
    ];

    const shuffledHints = shuffle(hints);
    sendHint(shuffledHints);

    hintInterval = setInterval(() => {
        if (!stopSending && timesSent < shuffledHints.length) {
            sendHint(shuffledHints);
        }
    }, 30000);

    gameTimeout = setTimeout(() => {
        if (!stopSending && !correctAnswerGiven) { 
            client.say(channel, `للأسف، انتهى الوقت! الكلمة كانت { ${chosenWord} }.`);
            restartGame();
            stopGame();
        }
    }, 90000);

    gameStarted = true;
}

function sendHint(hints) {
    const hint = hints[timesSent];
    client.say(channel, hint);
    sentHints.push(hint);
    timesSent++;
}

function stopGame() {
    clearInterval(hintInterval);
    clearTimeout(gameTimeout);
    gameStarted = false;
    correctAnswerGiven = false;
    gameStoppedManually = true;
    stopSending = true;
}

client.on('chat', (channel, user, message, self) => {
    if (self) return;

    if (message.trim() === '!تخمين') {
        if (!gameStarted) {
            startGame();
        } else {
            client.say(channel, `@${user.username} عذرًا، اللعبة شغالة بالفعل!`);
        }
    }

    if (message.trim() === '!توقف') {
        stopGame();
    }

    if (gameStarted && message === chosenWord) {
        correctAnswerGiven = true;
        client.say(channel, `@${user.username} صحيح! الإجابة هي { ${chosenWord} }.`);
        winnersList.push(user.username);
        io.emit('updateWinnersList', winnersList); // تحديث الموقع
        restartGame();
        stopGame();
    }
});



// الاستماع إلى الرسائل في الشات
client.on('message', (target, context, msg, self) => {
  if (self) return; // تجاهل رسائل البوت الخاصة

  // التحقق من الأمر المطلوب
  if (msg.trim() === '!وردة') {
      // جلب البيانات من URL المحدد بدون معرف المشرف
      fetch(`https://commands.garretcharp.com/twitch/chatter/${target.slice(1)}`)
          .then(response => response.text())
          .then(data => {
              // إرسال الرد في الشات
              client.say(target, data);
          })
          .catch(err => {
              console.error(err);
              client.say(target, 'حدث خطأ أثناء جلب البيانات.');
          });
  }
});




// خريطة الاستبدال
const charMap = {
    'h': 'ا',
    'g': 'ل',
    ']': 'د',
    '[': 'ج',
    'p': 'ح',
    'o': 'خ',
    'i': 'ه',
    'u': 'ع',
    'y': 'غ',
    't': 'ف',
    'r': 'ق',
    'e': 'ث',
    'w': 'ص',
    'q': 'ض',
    '`': 'ذ',
    '\'': 'ط',
    ';': 'ك',
    'l': 'م',
    'k': 'ن',
    'j': 'ت',
    'f': 'ب',
    'd': 'ي',
    's': 'س',
    'a': 'ش',
    '/': 'ظ',
    '.': 'ز',
    ',': 'و',
    'm': 'ة',
    'n': 'ى',
    'b': 'لا',
    'v': 'ر',
    'c': 'ؤ',
    'x': 'ء',
    'z': 'ئ'
};

// دالة لتبديل الأحرف في النص
function replaceChars(text) {
    return text.split('').map(char => charMap[char] || char).join('');
}

// دالة للتحقق مما إذا كان النص مكتوبًا بالأحرف العربية بالكامل
function isArabicText(text) {
  return /^[\u0600-\u06FF\s]+$/.test(text);
}

// الرد على الرسائل
client.on('message', (channel, tags, message, self) => {
    if(self) return;

    // التحقق مما إذا كانت الرسالة تحتوي على الأمر "بدل"
    const command = "بدل";
    if (message.startsWith(command)) {
        // استخراج النص بعد الأمر "بدل"
        const textToReplace = message.slice(command.length);
        if (isArabicText(textToReplace)) {
          // إذا كان النص مكتوبًا بالأحرف الإنجليزية بالكامل
          client.say(channel, `@${tags.username},  كلامك مضبوط يا حبيبنا  `);
      } else {

        // تطبيق استبدال الأحرف
        const replacedMessage = replaceChars(textToReplace);

        // إرسال الرسالة المعدلة في الدردشة
        client.say(channel, ` انهو يقول ( ${replacedMessage} )`);
      }
    }
});



// خريطة الاستبدال بالعكس
const charMapReverse = {
    'ا': 'h',
    'ل': 'g',
    'د': ']',
    'ج': '[',
    'ح': 'p',
    'خ': 'o',
    'ه': 'i',
    'ع': 'u',
    'غ': 'y',
    'ف': 't',
    'ق': 'r',
    'ث': 'e',
    'ص': 'w',
    'ض': 'q',
    'ذ': '`',
    'ط': '\'',
    'ك': ';',
    'م': 'l',
    'ن': 'k',
    'ت': 'j',
    'ب': 'f',
    'ي': 'd',
    'س': 's',
    'ش': 'a',
    'ظ': '/',
    'ز': '.',
    'و': ',',
    'ة': 'm',
    'ى': 'n',
    'لا': 'b',
    'ر': 'v',
    'ؤ': 'c',
    'ء': 'x',
    'ئ': 'z'
};

// دالة لتبديل الأحرف في النص بالعكس
function replaceCharsReverse(text) {
    return text.split('').map(char => charMapReverse[char] || char).join('');
}

// دالة للتحقق مما إذا كان النص مكتوبًا بالأحرف الإنجليزية بالكامل
function isEnglishText(text) {
    return /^[a-zA-Z\s]+$/.test(text);
}

// الرد على الرسائل
client.on('message', (channel, tags, message, self) => {
    if(self) return;

    // التحقق مما إذا كانت الرسالة تحتوي على الأمر "بدل"
    const command = "replace";
    if (message.startsWith(command)) {
        // استخراج النص بعد الأمر "بدل"
        const textToReplace = message.slice(command.length);

        if (isEnglishText(textToReplace)) {
            // إذا كان النص مكتوبًا بالأحرف الإنجليزية بالكامل
            client.say(channel, `@${tags.username},  كلامك مضبوط يا حبيبنا  `);
        } else {
            // تطبيق استبدال الأحرف بالعكس
            const replacedMessage = replaceCharsReverse(textToReplace);

            // إرسال الرسالة المعدلة في الدردشة
      client.say(channel, `he says ( ${replacedMessage} )`);
        }
    }
});




// قائمة الأوامر
let commands = {};

// تحميل الأوامر من ملف
if (fs.existsSync('commands.json')) {
    commands = JSON.parse(fs.readFileSync('commands.json', 'utf8'));
}

// حفظ الأوامر إلى ملف
function saveCommands() {
    fs.writeFileSync('commands.json', JSON.stringify(commands, null, 2));
}

// عند الاتصال
client.on('connected', (addr, port) => {
    console.log(`* Connected to ${addr}:${port}`);
});

// عند استقبال رسالة
client.on('message', (channel, userstate, message, self) => {
    if (self) return;

    const args = message.split(' ');
    const command = args.shift().toLowerCase();

    // التحقق من المستخدم لإضافة أو حذف الأوامر
    const username = userstate['display-name'];

    // إضافة أمر
    if (command === '!add' && username === 'EIADu') {
        const trigger = args.shift();
        const response = args.join(' ');

        if (trigger && response) {
            commands[trigger] = response;
            saveCommands();
            client.say(channel, `أمر جديد أضيف: ${trigger}`);
        } else {
            client.say(channel, 'استخدام غير صحيح. الصيغة: !add <trigger> <response>');
        }
    }

    // حذف أمر
    if (command === '!delete' && username === 'EIADu') {
        const trigger = args.shift();

        if (trigger && commands[trigger]) {
            delete commands[trigger];
            saveCommands();
            client.say(channel, `أمر محذوف: ${trigger}`);
        } else {
            client.say(channel, 'استخدام غير صحيح أو الأمر غير موجود.');
        }
    }

    // تنفيذ الأوامر من قبل الجميع
    if (commands[command]) {
        client.say(channel, commands[command]);
    }
});

// قائمة الرسائل العشوائية
const messages = [
  // رسائل ترحيبية
  "يا هلا والله! 🌟",
  "نور البث بوجودكم! 🌟",
  "كيف الحال يا جماعة؟ 😄",
  "أهلًا وسهلًا بالجميع! 🎉",
  "مرحبًا يا أبطال! 💪",
  "يا هلا فيكم، اليوم الجو رائع! ☀️",
  "كيف الأمور معاكم؟ 😎",
  "منورين البث كلكم! 🌟",
  "أهلاً وسهلاً بكل المشاهدين! 👋",
  "اللي يدخل لازم يقول مرحبا! 😉",
  "حياكم الله كلكم! 🎉",
  "شخباركم؟ كيف النفسيات؟ 💭",
  "يا هلا بالمتابعين الغالين! 🙌",
  "أهلًا بالجميع في البث المباشر! 🎥",
  "منورين الشاشة يا حلوين! 🌟",
  "يا مراحب بكل المتابعين! 🌟",
  "أهلًا بكل الموجودين! 🙋‍♂️",
  "مرحبًا، إن شاء الله تكونوا بخير! 🌟",
  "كيف الحال؟ إن شاء الله يومكم رائع! ☀️",
  "يا مرحبا ويا مسهلا بالجميع! 🌟",
  "مرحبًا بكم جميعًا في البث! 🎉",
  "أهلاً وسهلاً بكل من دخل! 🌟",
  "نور البث بوجودكم يا حلوين! 🌟",
  "أهلًا بكل المشاهدين! 💖",
  "يا هلا بالناس الطيبة! 🌟",
  "مرحبًا بالجميع! إن شاء الله تكونوا بخير! ☀️",
  "كيف الحال يا شباب؟ 🌟",
  "أهلًا وسهلًا بالجميع في البث! 🎉",
  "مرحبًا بكم في القناة! 🌟",
  "منورين البث يا غاليين! 🌟",
  
  // رسائل شكر
  "يعطيكم العافية على الدعم! 💖",
  "شكرًا لكل واحد دعم القناة! 🙏",
  "مقدرين لكم كل الدعم، شكرًا من القلب! 💖",
  "يعطيكم ألف عافية على وجودكم ودعمكم! 🌟",
  "شكرًا لكل متابع ومتابعة، أنتم الأروع! 💪",
  "مليون شكر لكل شخص هنا! 💖",
  "يعطيكم العافية على التفاعل! 🙌",
  "شكرًا من القلب لكل واحد يدعمنا! 💖",
  "الله يعطيكم العافية على الدعم المتواصل! 💖",
  "شكراً لكل المتابعين، أنتم السند! 🙏",
  "كل الدعم اللي نلقاه منكم محفز بشكل! 🌟",
  "مليون شكر لكم يا غاليين! 🙌",
  "يعطيكم ألف عافية على وجودكم هنا! 💖",
  "شكرًا لكل واحد بيحضر البث! 🌟",
  "يعطيكم العافية على التواجد والدعم! 💖",
  "كل الدعم اللي نلقاه منكم يخلينا نكمل! 🌟",
  "شكرًا لكل متابع ومتابعة، أنتم السند! 💪",
  "الله يعطيكم العافية على دعمكم الكبير! 🙏",
  "مليون شكر لكم يا غاليين! 🙌",
  "شكرًا من القلب لكل شخص بيحضر البث! 🌟",
  "يعطيكم العافية على التواجد والدعم! 💖",
  "كل الدعم اللي نلقاه منكم محفز! 🌟",
  "مليون شكر لكل المتابعين الأوفياء! 💪",
  "شكراً لكل شخص يدعمنا هنا! 🙌",
  "شكرًا لكم، أنتم الأروع دائمًا! 💖",
  "يعطيكم العافية على التفاعل والدعم! 🌟",
  "شكرًا لكل متابع و متابعة، أنتم السند! 💪",
  "مليون شكر لكل المتابعين! 🙌",
  "شكرًا من القلب لكل واحد بيحضر البث! 💖",
  "يعطيكم العافية على وجودكم هنا! 🌟",
  
  // رسائل تحفيزية
  "تذكروا دايمًا، النجاح ما يجي بالساهل! 💪",
  "مافي شيء مستحيل لو وضعت عقلك عليه! 🚀",
  "خلوا عندكم ثقة بالنفس، تقدروا توصلوا! 🌟",
  "تذكروا، كل شيء يبدأ بخطوة صغيرة! 👣",
  "لا تستسلموا، النجاح قريب جدًا! 🎯",
  "كل ما تزيد المحاولات، تزيد الفرص للنجاح! 🌟",
  "خلوا هدفكم قدام عينكم وركزوا عليه! 👀",
  "كلما كان الطريق أصعب، كان النجاح أحلى! 💪",
  "مافي شيء مستحيل، تقدروا توصلوا لأي شيء! 🚀",
  "تذكروا، كل خطوة تقربكم من الهدف! 🎯",
  "الأمل هو اللي بيخلي المستحيل ممكن! 🌟",
  "حافظوا على إيجابيتكم، الطريق طويل لكن النجاح يستاهل! 🌟",
  "مافي شيء مستحيل لو عندك إصرار وعزيمة! 💪",
  "خلوا عندكم ثقة بأنفسكم، النجاح قريب! 🌟",
  "الطريق طويل لكن الصبر هو المفتاح! 🚀",
  "تذكروا، الإيجابية هي اللي بتحركك نحو النجاح! 🌟",
  "ماتستسلموا أبدًا، كل خطوة تقربكم من هدفكم! 💪",
  "الأهم إنك تبدأ، الباقي بيجي مع الوقت! 🌟",
  "الإصرار والعزيمة هم الأساس للنجاح! 🚀",
  "خلوا عندكم ثقة بنفسكم، وتوكلوا على الله! 💪",
  "الطريق مليان تحديات، لكنكم قدها! 🌟",
  "مافي شيء مستحيل، بس المهم تكونوا مصرين! 🚀",
  "تذكروا، كل خطوة تقربكم من الهدف الكبير! 🎯",
  "الأمل هو اللي بيخلي المستحيل ممكن! 🌟",
  "حافظوا على إيجابيتكم، النجاح قريب! 🚀",
  "مافي شيء مستحيل لو عندك إصرار وعزيمة! 💪",
  "خلوا عندكم ثقة بنفسكم، النجاح بيدكم! 🌟",
  "الطريق طويل لكن الصبر مفتاح النجاح! 🚀",
  "تذكروا، الإيجابية هي اللي بتحركك للأمام! 🌟",
  "لا تتوقفوا، كل خطوة تقربكم من هدفكم! 💪",

  // نصائح
  "لا تنسوا تشربوا ماء، الصحة مهمة! 💧",
  "خذوا استراحة بين الحين والآخر! 🛌",
  "مارسوا رياضة خفيفة لتجديد النشاط! 🏃‍♂️",
  "تذكروا: صحة العقل تبدأ من صحة الجسم! 💪",
  "لا تترددوا في طلب المساعدة إذا احتجتوها! 🙌",
  "النوم الجيد هو مفتاح النجاح في اليوم التالي! 😴",
  "حافظوا على توازن بين العمل والترفيه! ⚖️",
  "احرصوا على تناول وجبات صحية! 🍎",
  "الاسترخاء مهم لاستعادة النشاط! 🌟",
  "نظموا وقتكم بشكل جيد لتفادي الضغوط! ⏰",
  "خذوا نفس عميق و استمتعوا باللحظة! 🌟",
  "النوم الكافي يضمن لك يوم مليء بالطاقة! 😴",
  "لا تنسوا تقضوا وقت مع العائلة والأصدقاء! 👨‍👩‍👧‍👦",
  "مارسوا هواية تحبوها لتجديد النشاط! 🎨",
  "اعتنوا بنفسكم، الصحة أولًا! 💪",
  "خذوا استراحة قصيرة كل ساعة! 🕒",
  "النوم الجيد مفتاح ليوم ناجح! 🌟",
  "تذكروا، الصحة النفسية لا تقل أهمية عن الجسدية! 🌟",
  "احرصوا على شرب كميات كافية من الماء! 💧",
  "لا تنسوا أخذ قسط من الراحة! 🛌",
  "النشاط البدني يعزز من صحتكم النفسية! 💪",
  "احرصوا على تناول وجبات متوازنة! 🍏",
  "الاسترخاء والتأمل مهم لاستعادة الطاقة! 🌟",
  "نظموا وقتكم لتحقيق التوازن بين العمل والحياة! ⏳",
  "خذوا نفس عميق، وركزوا على اللحظة الحالية! 🌟",
  "النوم الكافي هو سر النشاط! 😴",
  "اعتنوا بنفسكم، الصحة هي الثروة الحقيقية! 💪",
  "مارسوا الهوايات اللي تحبوها لإعادة شحن الطاقة! 🎨",
  "لا تنسوا قضاء وقت مع الأحباب، الحياة قصيرة! 🌟"
];

// متغير للتحكم في حالة إرسال الرسائل
let sendMessages = false;
let intervalTime = 60000; // الزمن الافتراضي (1 دقيقة)
let intervalId;

// تشغيل الرسائل العشوائية
function sendRandomMessage() {
  if (sendMessages) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    client.say(channel, randomMessage);
  }
}

// استقبال الرسائل من الشات
client.on('message', (channel, tags, message, self) => {
  if (self) return;

  const lowerMessage = message.toLowerCase();
  
  // تفعيل إرسال الرسائل مع تحديد الوقت عند قول "كوكو"
  if (tags.username.toLowerCase() === 'eiadu' && lowerMessage.startsWith('!!')) {
    const parts = lowerMessage.split(' ');
    const timeInMinutes = parseInt(parts[1]);

    if (!isNaN(timeInMinutes) && timeInMinutes > 0) {
      intervalTime = timeInMinutes * 60000; // تحويل الدقائق إلى ميلي ثانية
    } else {
      intervalTime = 60000; // إذا لم يتم تحديد رقم، استخدم دقيقة واحدة
    }

    sendMessages = true;
    clearInterval(intervalId); // إيقاف المؤقت القديم إن وجد
    intervalId = setInterval(sendRandomMessage, intervalTime);
    client.say(channel, `${intervalTime / 60000}  🚀`);
  }

  // إيقاف إرسال الرسائل عندما يقول EIADu "بوبو"
  if (tags.username.toLowerCase() === 'eiadu' && lowerMessage === '--') {
    sendMessages = false;
    clearInterval(intervalId); // إيقاف المؤقت
    client.say(channel, " 🛑");
  }
});





// قائمة الكلمات المعدة مسبقاً
const worList = [
    'apple', 'banana', 'chair', 'table', 'window', 'door', 'car', 'house', 'tree', 'river',
    'mountain', 'cloud', 'sky', 'star', 'moon', 'sun', 'water', 'fire', 'earth', 'wind',
    'bird', 'fish', 'cat', 'dog', 'horse', 'cow', 'chicken', 'mouse', 'elephant', 'lion',
    'tiger', 'bear', 'wolf', 'fox', 'rabbit', 'deer', 'monkey', 'kangaroo', 'giraffe',
    'zebra', 'penguin', 'shark', 'whale', 'dolphin', 'octopus', 'crab', 'lobster', 'snail', 'frog',
    'snake', 'lizard', 'spider', 'bee', 'butterfly', 'ant', 'fly', 'worm', 'leaf', 'flower', 'grass',
    'bush', 'forest', 'desert', 'beach', 'ocean', 'lake', 'pond', 'hill', 'valley', 'island', 'cave',
    'rock', 'stone', 'sand', 'mud', 'clay', 'soil', 'dust', 'smoke', 'ash', 'steam', 'cloud',
    'rain', 'snow', 'hail', 'sleet', 'thunder', 'lightning', 'storm', 'hurricane', 'tornado', 'flood',
    'earthquake', 'volcano', 'eruption', 'lava', 'magma', 'glacier', 'ice', 'snowflake', 'icicle', 'frost',
    'cold', 'hot', 'warm', 'cool', 'breeze', 'wind', 'gale', 'hurricane', 'typhoon', 'cyclone',
    'planet', 'comet', 'asteroid', 'meteor', 'satellite', 'space', 'galaxy', 'universe', 'blackhole',
    'time', 'light', 'shadow', 'mirror', 'reflection', 'glass', 'crystal', 'diamond', 'gold', 'silver',
    'bronze', 'copper', 'iron', 'steel', 'aluminum', 'metal', 'plastic', 'rubber', 'wood', 'paper',
    'cloth', 'cotton', 'silk', 'wool', 'leather', 'fur', 'skin', 'hair', 'nail', 'tooth',
    'bone', 'blood', 'muscle', 'heart', 'brain', 'lung', 'liver', 'stomach', 'kidney', 'skin',
    'eye', 'ear', 'nose', 'mouth', 'tongue', 'lip', 'tooth', 'chin', 'cheek', 'forehead',
    'hand', 'finger', 'thumb', 'nail', 'arm', 'elbow', 'shoulder', 'chest', 'back', 'spine',
    'leg', 'knee', 'foot', 'toe', 'ankle', 'heel', 'hip', 'thigh', 'calf', 'wrist', 'palm',
    'head', 'neck', 'face', 'eye', 'ear', 'nose', 'lip', 'tongue', 'chin', 'hair',
    'bottle', 'cup', 'plate', 'fork', 'knife', 'spoon', 'bowl', 'pot', 'pan', 'glass', 'jar'
];



// إضافة أمر !randomwords
client.on('message', (channel, tags, message, self) => {
    if (self) return;

    if (message.toLowerCase() === 'ola' && username === 'EIADu') {
        // خلط القائمة عشوائيًا واختيار 99 كلمة
        let randomWords = worList.sort(() => 0.5 - Math.random()).slice(0, 99);

        // إرسال الكلمات واحدة تلو الأخرى بفاصل زمني
        randomWords.forEach((word, index) => {
            setTimeout(() => {
                client.say(channel, word);
            }, index * 50); // فاصل زمني قدره 1000 مللي ثانية (1 ثانية) بين كل رسالة
        });
    }
});


const { OpenAI } = require('openai');

// إعداد OpenAI API
const openai = new OpenAI({
    apiKey: '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', // استبدل بمفتاح API الخاص بك
});

// هيكل لتخزين سياق المحادثة
const conversationContext = {};

// دالة لتقسيم الرسائل الطويلة
function splitMessage(message, maxLength) {
    const parts = [];
    for (let i = 0; i < message.length; i += maxLength) {
        parts.push(message.substring(i, i + maxLength));
    }
    return parts;
}

// الاستماع للرسائل
client.on('message', async (channel, tags, message, self) => {
    if (self) return; // تجنب الرد على رسائل البوت نفسه

    const username = tags.username.toLowerCase();

    // تحقق من أن المستخدم هو "EIADu" وأن الرسالة تحتوي على "عنب"
    if (username === 'eiadu' && message.includes('#')) {
      if (!conversationContext[username]) {
          conversationContext[username] = [];
      }
      
        // أضف الرسالة الحالية إلى السياق
        conversationContext[username].push(message);
        
        try {
            // توليد رد باستخدام OpenAI
            const response = await openai.chat.completions.create({
              model: 'gpt-3.5-turbo',
              messages: [
                  { role: 'system', content: 'You are a helpful assistant.' },
                  ...conversationContext[username].map(msg => ({ role: 'user', content: msg }))
              ],
              max_tokens: 300 // يمكن تعديل هذا الرقم حسب الحاجة
          });
          

            const reply = response.choices[0].message.content.trim();
            
            // تقسيم الرد إذا كان طويلاً
            const replyParts = splitMessage(reply, 270);

            // إرسال كل جزء من الرد في رسالة منفصلة
            for (const part of replyParts) {
                client.say(channel, `@${username}, ${part}`);
            }

            // تحديث السياق بناءً على الرد الجديد
            conversationContext[username].push(reply);
        } catch (error) {
            if (error.response && error.response.status === 429) {
                console.error('Exceeded quota or rate limits.');
                client.say(channel, `@${username}, معليش، يبدو أنني تجاوزت الحد المسموح به الآن.`);
            } else {
                console.error(error);
                client.say(channel, `@${username}, معليش حصل خطأ وأنا بحاول أجاوب.`);
            }
        }
    }
});






const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); // تأكد من وضع هذا قبل تحديد المسارات

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// دالة لقراءة الوقت المنقضي من ملف time.json
function readElapsedTime() {
    try {
        const data = fs.readFileSync('time.json', 'utf-8');
        const { elapsedTime } = JSON.parse(data);
        return elapsedTime;
    } catch (error) {
        console.error('Error reading time.json:', error);
        return 'غير متوفر'; // في حال حدوث خطأ أثناء قراءة الملف
    }
}

// Endpoint to get attendance data
app.get('/attendance', (req, res) => {
  const attendanceFilePath = path.join(__dirname, 'attendance.json');
  if (fs.existsSync(attendanceFilePath)) {
      const data = fs.readFileSync(attendanceFilePath);
      res.json(JSON.parse(data));
  } else {
      res.json({});
  }
});

// إرسال الوقت المنقضي عند اتصال المستخدم
io.on('connection', (socket) => {
    console.log('client connected');

    // إرسال الوقت المنقضي عند الاتصال
    const elapsedTime = readElapsedTime();
    socket.emit('elapsedTime', elapsedTime);

    // إرسال حالة الأمر الحالية عند الاتصال
    socket.emit('messageCommandStatus', sendMessages);

    // إرسال قائمة الفائزين الحالية عند الاتصال
    socket.emit('updateWinnersList', winnersList);

    socket.emit('updateUsersList', usersList);

    socket.on('sendCommand', (command) => {
        client.say('herodevil777', command)
            .then(() => {
                socket.emit('botResponse', `تم إرسال الرسالة: ${command}`);
            })
            .catch((error) => {
                socket.emit('botResponse', `خطأ في إرسال الرسالة: ${error.message}`);
            });
    });

socket.on('sendclosed', () => {
  // إرسال الرسالة إلى الشات في تويتش
  client.say(channel, 'soon');
});


    socket.on('toggleMessageCommand', () => {
        sendMessages = !sendMessages;

        if (sendMessages) {
            clearInterval(intervalId);
            intervalId = setInterval(sendRandomMessage, intervalTime);
        } else {
            clearInterval(intervalId);
        }

        io.emit('messageCommandStatus', sendMessages);

    });
});

app.use(express.json());
app.use(express.static('public'));

if (fs.existsSync(timeFilePath)) {
  const timeData = JSON.parse(fs.readFileSync(timeFilePath, 'utf8'));
  startTime2 = moment.tz(timeData, 'Asia/Riyadh');
} else {
  startTime2 = moment.tz('2024-04-12 9:13:35', 'Asia/Riyadh');
}

// Endpoint للحصول على الوقت المنقضي
app.get('/elapsed-time', (req, res) => {
  const currentTime = moment();
  const duration = moment.duration(currentTime.diff(startTime2));

  const days = Math.floor(duration.asDays());
  const hours = Math.floor(duration.asHours()) % 24;
  const minutes = Math.floor(duration.asMinutes()) % 60;
  const seconds = Math.floor(duration.asSeconds()) % 60;

  const timePassed = `${days} يوم و ${hours} ساعة و ${minutes} دقيقة و ${seconds} ثانية`;
  res.json({ timePassed });
});

// Endpoint لتعديل الوقت
app.post('/set-time', (req, res) => {
  const { days, hours, minutes, seconds } = req.body;

  // تعيين الوقت إلى القيم الجديدة المدخلة
  const newTime = moment.tz('Asia/Riyadh').subtract({
    days: parseInt(days) || 0,
    hours: parseInt(hours) || 0,
    minutes: parseInt(minutes) || 0,
    seconds: parseInt(seconds) || 0,
  });

  startTime2 = newTime;
  saveTimeToFile();
  res.json({ message: 'تم تحديث الوقت بنجاح!' });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});




let attendanceActive = false;
let attendanceList = [];
let attendanceCount = {};

// Load attendance data from file
const loadAttendanceData = () => {
    if (fs.existsSync('attendance.json')) {
        const data = fs.readFileSync('attendance.json');
        attendanceCount = JSON.parse(data);
    }
};

// Save attendance data to file
const saveAttendanceData = () => {
    fs.writeFileSync('attendance.json', JSON.stringify(attendanceCount, null, 2));
};

// Initialize attendance data on bot startup
loadAttendanceData();

// Command to start attendance tracking
client.on('message', (channel, userstate, message, self) => {
    if (self) return;

    const username = userstate['display-name'];
    const isModerator = userstate['user-type'] === 'mod';

    // Moderator starts attendance tracking with "!تحضير"
    if (message.trim() === 'تحضير' && (username === 'EIADu' || username === 'herodevil777')) {
      attendanceActive = true;
      attendanceList = [];
      client.say(channel, 'التحضير بدأ! لديك 5 دقائق لكتابة "حاضر" أو "موجود" للتسجيل.');
  
      // End tracking after 5 minutes
      setTimeout(() => {
          attendanceActive = false;
          client.say(channel, 'انتهى وقت التحضير.');
      }, 5 * 60 * 1000);
  }
  

    // User responds with "حاضر" or "موجود"
    if (attendanceActive && (message.trim() === 'حاضر' || message.trim() === 'موجود')) {
        if (!attendanceList.includes(username)) {
            attendanceList.push(username);
            attendanceCount[username] = (attendanceCount[username] || 0) + 1;
            saveAttendanceData();  // Save data whenever someone responds
            client.say(channel, `${username} تم تسجيل حضورك.`);
        } else {
            client.say(channel, `${username} لقد تم تسجيل حضورك مسبقًا.`);
        }
    }

    // User checks their attendance count with "حضوري؟"
    if (message.trim() === 'حضوري؟') {
        const count = attendanceCount[username] || 0;
        client.say(channel, `${username} لديك ${count} مرات حضور.`);
    }
});


