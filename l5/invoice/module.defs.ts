/// <mls fileReference="_102044_/l5/invoice/module.defs.ts" enhancement="_blank"/>

export const invoiceMdmModulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "mdmDomain",
  "artifactId": "invoice",
  "moduleName": "invoice",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMDM",
    "stepId": 12,
    "planId": "plan-mdm"
  },
  "data": {
    "kind": "mdm",
    "moduleId": "invoice",
    "domainId": "invoice",
    "plannedByModule": "repairBay",
    "referencesExisting": false,
    "domain": {
      "domainId": "invoice",
      "title": "Fatura",
      "masterEntities": [
        "Invoice"
      ],
      "sourceOfTruth": "invoiceMasterData",
      "consumers": [
        "billingPage",
        "vehicleHistoryPage",
        "billingWorkflow",
        "invoiceUsecaseEntities",
        "metricTableOps"
      ],
      "governanceRules": [
        "Fatura gerada exclusivamente a partir de OS concluída.",
        "Total da fatura deve refletir o valor consolidado da OS.",
        "Status de faturamento atualizado pelo fluxo próprio de billingWorkflow."
      ]
    }
  }
} as const;

export default invoiceMdmModulePlan;
