/// <mls fileReference="_102044_/l5/notifications/module.defs.ts" enhancement="_blank"/>

export const notificationsModulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "horizontalModule",
  "artifactId": "notifications",
  "moduleName": "notifications",
  "status": "draft",
  "source": {
    "agentName": "agentPlanHorizontals",
    "stepId": 13,
    "planId": "plan-horizontals"
  },
  "data": {
    "kind": "horizontal",
    "moduleId": "notifications",
    "horizontalModuleId": "notifications",
    "plannedByModule": "repairBay",
    "referencesExisting": false,
    "module": {
      "horizontalModuleId": "notifications",
      "priority": "soon",
      "reason": "Alertas de estoque baixo exigem comunicação operacional dedicada.",
      "reusedOntologyRefs": [],
      "consumedByArtifacts": [
        "inventoryAlertWorkflow",
        "partsInventoryPage"
      ]
    }
  }
} as const;

export default notificationsModulePlan;
