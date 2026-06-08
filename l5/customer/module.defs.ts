/// <mls fileReference="_102044_/l5/customer/module.defs.ts" enhancement="_blank"/>

export const customerMdmModulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "mdmDomain",
  "artifactId": "customer",
  "moduleName": "customer",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMDM",
    "stepId": 12,
    "planId": "plan-mdm"
  },
  "data": {
    "kind": "mdm",
    "moduleId": "customer",
    "domainId": "customer",
    "plannedByModule": "repairBay",
    "referencesExisting": false,
    "domain": {
      "domainId": "customer",
      "title": "Cliente",
      "masterEntities": [
        "Customer"
      ],
      "sourceOfTruth": "customerMasterData",
      "consumers": [
        "customerManagementPage",
        "vehicleManagementPage",
        "vehicleHistoryPage"
      ],
      "governanceRules": [
        "Dados de contato mínimos obrigatórios para cadastro.",
        "Cliente não pode ser excluído se possuir veículos ou OS vinculadas.",
        "Atualizações restritas ao perfil atendente e dono da oficina."
      ]
    }
  }
} as const;

export default customerMdmModulePlan;
