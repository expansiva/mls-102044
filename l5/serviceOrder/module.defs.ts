/// <mls fileReference="_102044_/l5/serviceOrder/module.defs.ts" enhancement="_blank"/>

export const serviceOrderMdmModulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "mdmDomain",
  "artifactId": "serviceOrder",
  "moduleName": "serviceOrder",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMDM",
    "stepId": 12,
    "planId": "plan-mdm"
  },
  "data": {
    "kind": "mdm",
    "moduleId": "serviceOrder",
    "domainId": "serviceOrder",
    "plannedByModule": "repairBay",
    "referencesExisting": false,
    "domain": {
      "domainId": "serviceOrder",
      "title": "Ordem de Serviço",
      "masterEntities": [
        "ServiceOrder"
      ],
      "sourceOfTruth": "serviceOrderMasterData",
      "consumers": [
        "serviceOrderListPage",
        "serviceOrderDetailPage",
        "billingPage",
        "vehicleHistoryPage",
        "serviceOrderWorkflow",
        "serviceOrderUsecaseEntities",
        "invoiceUsecaseEntities",
        "billingWorkflow",
        "metricTableOps",
        "repairSuggestionAgent",
        "maintenanceForecastWorkflow",
        "maintenanceForecastUsecaseEntities"
      ],
      "governanceRules": [
        "Ciclo de vida padronizado: aberta → em execução → aguardando peça → concluída → fechada/cancelada.",
        "Total calculado pela soma de mão de obra e peças, com impostos/descontos configuráveis.",
        "Fechamento permitido apenas após conclusão dos serviços."
      ]
    }
  }
} as const;

export default serviceOrderMdmModulePlan;
