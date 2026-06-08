/// <mls fileReference="_102044_/l5/finance/module.defs.ts" enhancement="_blank"/>

export const financeModulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "horizontalModule",
  "artifactId": "finance",
  "moduleName": "finance",
  "status": "draft",
  "source": {
    "agentName": "agentPlanHorizontals",
    "stepId": 13,
    "planId": "plan-horizontals"
  },
  "data": {
    "kind": "horizontal",
    "moduleId": "finance",
    "horizontalModuleId": "finance",
    "plannedByModule": "repairBay",
    "referencesExisting": false,
    "module": {
      "horizontalModuleId": "finance",
      "priority": "now",
      "reason": "Escopo inclui faturamento com faturas vinculadas à OS no MVP.",
      "reusedOntologyRefs": [
        "Invoice"
      ],
      "consumedByArtifacts": [
        "billingWorkflow",
        "billingPage",
        "invoiceMasterData"
      ]
    }
  }
} as const;

export default financeModulePlan;
