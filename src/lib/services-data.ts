// services-data.ts - Pure TypeScript data file (no JSX)
export interface ServiceData {
    id: number
    title: string
    description: string
    fullDescription?: string
    iconType: 'Briefcase' | 'CheckCircle' | 'FileText' | 'BarChart'
    color: string
    items: string[]
    image: string
    slug: string
    additionalContentId?: number
    relatedServices?: string[]
  }
  
  export const servicesData: ServiceData[] = [
    {
      id: 1,
      title: "Property Consultancy &  Management",
      description:
        "Construction brocade and rentals involves a major capital investment and it's critical that it's subject to clear consistent governance, rigorous management of risk and scope change.",
      fullDescription:
        "Construction brocade and rentals involves a major capital investment and it's critical that it's subject to clear consistent governance, rigorous management of risk and scope change in line with budgetary, quality and time constraints and objectives, and the effective management of stakeholders in the supply chain. We formulate clear governance, control and communication plans for the project to promote technical and commercial compliance by all parties. As Mundit Investment Ltd, we are aware that property development processes vary from project to project but our experience indicates common phases which need to be handled with utmost care and precision.",
      iconType: "Briefcase",
      color: "from-teal-800 to-teal-700",
      items: [
        "Tenant Customer Service and Issue Resolution",
        "Tenant Satisfaction Survey",
        "Leasing Units, Rent Collection and Processing Evictions",
        "Property Maintenance and Improvements",
        "Bill Payment, Bookkeeping and Financial Reporting",
        "Managing tenders for security, cleaning, and maintenance",
      ],
      image: "/images/pic4.jpg",
      slug: "project-planning",
      additionalContentId: 1,
      relatedServices: ["cost-planning", "market-research"],
    },
    {
      id: 2,
      title: "  Real Estate Cost Planning ",
      description:
        "We ensure that your commercial interests are safeguarded at every stage of the design, procurement and construction process.",
      fullDescription:
        "We ensure that your commercial interests are safeguarded at every stage of the design, procurement and construction process. Our cost planning and management services are designed to provide you with accurate cost estimates, effective cost control, and value engineering to maximize your return on investment.",
      iconType: "CheckCircle",
      color: "from-teal-700 to-teal-600",
      items: [
        "Construction cost estimating and planning",
        "Schedule and cost forecasting",
        "Value engineering",
        "Measurement and evaluation of works in progress",
        "Cost auditing and financial appraisals",
        "Settlement of final accounts",
        "Value for money audits",
      ],
      image: "/images/pic6.jpg",
      slug: "cost-planning",
      relatedServices: ["project-planning", "dispute-resolution"],
    },
    {
      id: 3,
      title: "Dispute Resolution",
      description:
        "Our well-grounded professionals will assist in the evaluation and resolution of project disputes from inception to private, administrative, or judicial conclusion.",
      fullDescription:
        "Our well-grounded professionals will assist in the evaluation and resolution of project disputes from inception to private, administrative, or judicial conclusion based on experience working with both clients and their counsel. We assess or validate entitlement and quantification of damages thus promoting a successful resolution in an efficient manner by identifying, analyzing, quantifying and presenting construction claims that may arise during the project.",
      iconType: "FileText",
      color: "from-teal-600 to-teal-500",
      items: [
        "Claims identification, preparation, and presentation",
        "Risk evaluation and Quantification",
        "Damage and disruption assessments",
        "Schedule delay analysis",
        "Perform independent third party assessments of claims including causation and liability",
        "Assess potential impact of design errors and change orders",
        "Construction mediation and arbitration support",
        "Provide expert witness services",
      ],
      image: "/images/pic3.jpg",
      slug: "dispute-resolution",
      additionalContentId: 3,
      relatedServices: ["cost-planning", "market-research"],
    },
    {
      id: 4,
      title: "Real Estate Market Research",
      description:
        "We undertake a market study on the highest and best use of land, its marketability, financial, legal, planning, and other factors that can make any given project economically viable.",
      fullDescription:
        "We undertake a market study on the highest and best use of land, its marketability, financial, legal, planning, and other factors that can either make any given project economically viable or not. Our research is also based on current market reports, market trends, sales figures, planning surveys and rental surveys. We have an in-house modest information library which guides us in research.",
      iconType: "BarChart",
      color: "from-teal-500 to-teal-400",
      items: [
        "Market trends analysis",
        "Property valuation research",
        "Competitive landscape assessment",
        "Investment opportunity identification",
        "Long-term finance advisory for real estate development",
        "Identification of potential development partners",
        "Construction of real estate indices for property performance measurement",
      ],
      image: "/images/pic7.jpg",
      slug: "market-research",
      additionalContentId: 4,
      relatedServices: ["project-planning", "dispute-resolution"],
    },
    {
      id: 5,
      title: "Property Cleanliness & Maintenance",
      description:
        "We provide comprehensive property maintenance and cleaning services to ensure your real estate assets remain in optimal condition, maintaining their value and appeal.",
      fullDescription:
        "Our dedicated team delivers professional property maintenance and cleaning services that enhance the longevity and aesthetics of your real estate investments. We implement systematic maintenance schedules, respond promptly to repair needs, and maintain high cleanliness standards to ensure tenant satisfaction and property value appreciation.",
      iconType: "CheckCircle",
      color: "from-teal-400 to-teal-300",
      items: [
        "Regular property inspections and maintenance",
        "Professional cleaning services",
        "Emergency repair response",
        "Preventive maintenance programs",
        "Landscape maintenance",
       
      ],
      image: "/images/house-cleaners.jpeg",
      slug: "property-maintenance",
      additionalContentId: 5,
      relatedServices: ["project-planning", "cost-planning"],
    },
  ]
  
  export function getServiceDataById(id: number): ServiceData | undefined {
    return servicesData.find(service => service.id === id)
  }