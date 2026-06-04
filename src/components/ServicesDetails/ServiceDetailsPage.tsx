import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Activity,
  Layers,
  Users,
} from "lucide-react";

// JSON DATA
import servicesData from "../../../public/Data/nas_infotech_services.json";

// ================= TYPES =================

type ProcessStep = {
  step: string;
  description: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type CoreOffering = {
  title: string;
  description: string;
};

type CloudSolution = {
  name: string;
  description: string;
};

type StaffingModel = {
  name: string;
  details: string[];
};

type OfferingItem = {
  type: string;
  details: string[];
};

type StrategyStep = {
  step: string;
  name: string;
  description: string;
};

type FeatureItem = {
  name: string;
  description: string;
};

type SpecialtyItem = {
  name: string;
  description: string;
};

type BenefitItem = {
  title: string;
  description: string;
};

type ServiceStructure = {
  title: string;
  badge: string;
  description: string;

  sub_description?: string;

  points?: string[];

  process?: (string | ProcessStep)[];

  why_choose_us?: string[];

  faqs?: FAQItem[];

  core_offerings?: CoreOffering[];

  services_provided?: string[];

  cloud_solutions?: CloudSolution[];

  offerings?: OfferingItem[];

  industries?: string[];

  models?: StaffingModel[];

  practices?: string[];

  expertise?: string[];

  specialties?: SpecialtyItem[];

  benefits?: (BenefitItem | string)[];

  strategy_steps?: StrategyStep[];

  features?: FeatureItem[];

  tools?: Record<string, string[]>;
};

export const ServiceDetailsPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [serviceId]);

  // ================= SLUG MAP =================

  const serviceKeyMap: Record<string, string> = {
    "software-development":
      "SoftwareDevelopment",

    "ai-and-ml": "AiAndMl",

    salesforce: "SalesForce",

    "bi-and-analytics":
      "BIandAnalytics",

    "testing-and-qa":
      "TestingandQA",

    devops: "DevOps",

    "cloud-computing":
      "CloudComputing",

    "web-development":
      "WebDevelopment",

    "digital-marketing":
      "DigitalMarketing",

    "cyber-security":
      "CyberSecurity",

    "big-data-and-analytics":
      "BigDataAndAnalytics",

    "product-development":
      "ProductDevelopment",

    "crm-services": "CrmServices",

    "it-staffing": "ItStaffing",

    "it-support": "ItSupport",
  };

  const mappedKey = serviceId
    ? serviceKeyMap[serviceId]
    : undefined;

  const service:
    | ServiceStructure
    | undefined = mappedKey
      ? (servicesData as Record<
        string,
        ServiceStructure
      >)[mappedKey]
      : undefined;

  // ================= FALLBACK =================

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F8F6]">

        <div className="text-center">

          <h2 className="text-3xl font-bold text-[#0F172A]">
            Service Not Found
          </h2>

          <p className="text-gray-500 mt-2">
            Requested service page does not
            exist.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#101828] relative overflow-x-hidden">

      {/* TOP OVERLAY */}
      <div className="absolute top-0 left-0 right-0 h-[90px] bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* BLUR */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-orange-200/40 via-rose-100/20 to-transparent blur-3xl pointer-events-none" />

      {/* ================= HERO ================= */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            key={serviceId}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">

              <span className="w-2 h-2 rounded-full bg-[#FF7A59]" />

              <span className="text-sm font-semibold text-[#0F172A]">
                {service.badge}
              </span>

            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#0F172A]">

              {service.title}

            </h1>

            {/* Description */}
            <p className="mt-6 text-[17px] leading-[32px] text-gray-600 max-w-2xl">

              {service.description}

            </p>

            {/* Sub Description */}
            {service.sub_description && (
              <p className="mt-5 border-l-2 border-orange-200 pl-4 italic text-gray-500 leading-[28px]">

                {service.sub_description}

              </p>
            )}

            {/* Points */}
            {service.points && (
              <div className="mt-10 space-y-4">

                {service.points.map(
                  (point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >

                      <div className="w-7 h-7 rounded-full bg-[#FFEEE8] flex items-center justify-center shrink-0 mt-1">

                        <ArrowRight
                          size={15}
                          className="text-[#FF7A59]"
                        />

                      </div>

                      <p className="text-[15px] leading-[26px] text-gray-700">

                        {point}

                      </p>

                    </div>
                  ),
                )}

              </div>
            )}

            {/* CTA */}
            <div className="mt-10">

              <button className="px-8 py-4 rounded-full bg-[#0F172A] text-white font-semibold hover:scale-[1.03] transition-all">

                Get Started

              </button>

            </div>

          </motion.div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* OFFERINGS */}
            {service.offerings && (
              <div className="bg-white p-8 rounded-[28px] border border-gray-100 shadow-sm">

                <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-[#0F172A]">

                  <Layers
                    size={20}
                    className="text-[#FF7A59]"
                  />

                  Service Offerings

                </h3>

                <div className="space-y-5">

                  {service.offerings.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-100 pb-5 last:border-0"
                      >

                        <h4 className="font-bold text-[15px] text-[#0F172A]">

                          {item.type}

                        </h4>

                        <ul className="mt-2 list-disc pl-5 space-y-1">

                          {item.details.map(
                            (
                              detail,
                              detailIndex,
                            ) => (
                              <li
                                key={detailIndex}
                                className="text-sm text-gray-600 leading-[24px]"
                              >
                                {detail}
                              </li>
                            ),
                          )}

                        </ul>

                      </div>
                    ),
                  )}

                </div>

              </div>
            )}

            {/* CORE OFFERINGS */}
            {service.core_offerings && (
              <div className="space-y-4">

                {service.core_offerings.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-100 p-6 rounded-[24px] shadow-sm"
                    >

                      <h3 className="font-bold text-[#0F172A] text-lg">

                        {item.title}

                      </h3>

                      <p className="text-sm text-gray-600 mt-2 leading-[24px]">

                        {item.description}

                      </p>

                    </div>
                  ),
                )}

              </div>
            )}

            {/* STAFFING MODELS */}
            {service.models && (
              <div className="bg-white p-8 rounded-[28px] border border-gray-100 shadow-sm">

                <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-[#0F172A]">

                  <Users
                    size={20}
                    className="text-[#FF7A59]"
                  />

                  Staffing Models

                </h3>

                <div className="space-y-5">

                  {service.models.map(
                    (model, index) => (
                      <div
                        key={index}
                        className="bg-orange-50/40 p-5 rounded-2xl border border-orange-100"
                      >

                        <h4 className="font-bold text-[#0F172A]">

                          {model.name}

                        </h4>

                        <ul className="mt-3 space-y-2">

                          {model.details.map(
                            (
                              detail,
                              detailIndex,
                            ) => (
                              <li
                                key={detailIndex}
                                className="text-sm text-gray-600 leading-[24px]"
                              >
                                • {detail}
                              </li>
                            ),
                          )}

                        </ul>

                      </div>
                    ),
                  )}

                </div>

              </div>
            )}

            {/* DEFAULT CARD */}
            {!service.offerings &&
              !service.core_offerings &&
              !service.models && (
                <div className="bg-white p-8 rounded-[28px] border border-gray-100 shadow-sm">

                  <Activity
                    size={32}
                    className="text-[#FF7A59] mb-5"
                  />

                  <h3 className="text-2xl font-bold text-[#0F172A]">

                    Enterprise Solutions

                  </h3>

                  <p className="text-gray-600 mt-3 leading-[28px]">

                    Empowering organizations
                    with scalable digital
                    transformation services.

                  </p>

                  {service.services_provided && (
                    <div className="flex flex-wrap gap-2 mt-6">

                      {service.services_provided.map(
                        (item, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 rounded-full bg-[#F9F8F6] border border-gray-200 text-xs font-semibold text-gray-700"
                          >

                            {item}

                          </span>
                        ),
                      )}

                    </div>
                  )}

                </div>
              )}

          </div>

        </div>

      </main>

      {/* ================= PROCESS ================= */}

      {service.process && (
        <section className="py-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-3xl font-black text-center text-[#0F172A] mb-16">

              Process Workflow

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {service.process.map(
                (item, index) => {
                  const isString =
                    typeof item === "string";

                  const title = isString
                    ? `Step ${index + 1}`
                    : item.step;

                  const desc = isString
                    ? item
                    : item.description;

                  return (
                    <div
                      key={index}
                      className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm"
                    >

                      <div className="text-5xl font-black text-orange-100 mb-4">

                        {String(
                          index + 1,
                        ).padStart(2, "0")}

                      </div>

                      <h3 className="text-lg font-bold text-[#0F172A]">

                        {title}

                      </h3>

                      <p className="text-sm text-gray-600 mt-3 leading-[24px]">

                        {desc}

                      </p>

                    </div>
                  );
                },
              )}

            </div>

          </div>

        </section>
      )}

    </div>
  );
};