import { privacy_policy } from "@/assets";
import { SubLinks } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const PrivacyPolicyPage = () => {
  const t = useTranslations();
  const sublinks = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("privacy policy"),
      href: "/",
    },
  ];
  return (
    <>
      <SubLinks links={sublinks} />
      <section>
        <div className="container">
          <div className="w-[89px] h-[89px] md:w-[119px] md:h-[119px] rounded-full bg-[#B027700D] mx-auto p-3 flex-c">
            <Image src={privacy_policy} alt="logo" loading="lazy" />
          </div>
          <div className="mt-6">
            <div>
              <p className="desc-color md:text-xl">
                {
                  "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
                }
              </p>
              <p className="desc-color md:text-xl">
                {
                  "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع."
                }
              </p>
              <p className="desc-color md:text-xl">
                {
                  "ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق."
                }
              </p>
              <p className="desc-color md:text-xl">
                {
                  "هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً."
                }
              </p>
            </div>
            <div className="mt-6 hidden md:block">
              <p className="desc-color md:text-xl">
                {
                  "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
                }
              </p>
              <p className="desc-color md:text-xl">
                {
                  "إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع."
                }
              </p>
              <p className="desc-color md:text-xl">
                {
                  "ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق."
                }
              </p>
              <p className="desc-color md:text-xl">
                {
                  "هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
