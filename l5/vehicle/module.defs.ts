/// <mls fileReference="_102044_/l5/vehicle/module.defs.ts" enhancement="_blank"/>

export const vehicleMdmModulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "mdmDomain",
  "artifactId": "vehicle",
  "moduleName": "vehicle",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMDM",
    "stepId": 12,
    "planId": "plan-mdm"
  },
  "data": {
    "kind": "mdm",
    "moduleId": "vehicle",
    "domainId": "vehicle",
    "plannedByModule": "repairBay",
    "referencesExisting": false,
    "domain": {
      "domainId": "vehicle",
      "title": "Veículo",
      "masterEntities": [
        "Vehicle"
      ],
      "sourceOfTruth": "vehicleMasterData",
      "consumers": [
        "vehicleManagementPage",
        "vehicleHistoryPage",
        "maintenanceForecastWorkflow",
        "maintenanceForecastUsecaseEntities",
        "repairSuggestionAgent"
      ],
      "governanceRules": [
        "Veículo deve estar vinculado a um cliente ativo.",
        "Identificação única por placa ou VIN.",
        "Dados de veículo são consumidos por OS, histórico e manutenção prevista."
      ]
    }
  }
} as const;

export default vehicleMdmModulePlan;
