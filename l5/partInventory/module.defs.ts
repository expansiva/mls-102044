/// <mls fileReference="_102044_/l5/partInventory/module.defs.ts" enhancement="_blank"/>

export const partInventoryMdmModulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "mdmDomain",
  "artifactId": "partInventory",
  "moduleName": "partInventory",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMDM",
    "stepId": 12,
    "planId": "plan-mdm"
  },
  "data": {
    "kind": "mdm",
    "moduleId": "partInventory",
    "domainId": "partInventory",
    "plannedByModule": "repairBay",
    "referencesExisting": false,
    "domain": {
      "domainId": "partInventory",
      "title": "Peça e Estoque",
      "masterEntities": [
        "Part",
        "InventoryStock"
      ],
      "sourceOfTruth": "partInventoryMasterData",
      "consumers": [
        "partsInventoryPage",
        "serviceOrderDetailPage",
        "inventoryAlertWorkflow",
        "inventoryAdjustUsecaseEntities",
        "serviceOrderUsecaseEntities",
        "metricTableOps",
        "inventoryLowStockMetric"
      ],
      "governanceRules": [
        "Cada peça deve ter código único e registro de estoque associado.",
        "Alerta operacional quando estoque abaixo do nível mínimo configurado.",
        "Baixa de estoque vinculada ao consumo em OS."
      ]
    }
  }
} as const;

export default partInventoryMdmModulePlan;
