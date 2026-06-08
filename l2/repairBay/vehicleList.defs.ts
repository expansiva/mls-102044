/// <mls fileReference="_102044_/l2/repairBay/vehicleList.defs.ts" enhancement="_blank"/>

export const vehicleListPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "vehicleList",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 59,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "vehicleList",
      "pageName": "Dashboard operacional",
      "actor": "shopOwner",
      "purpose": "Visualizar indicadores operacionais do dia a dia.",
      "capabilities": [
        "dashboardInsights"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": [
          "maintenanceForecastWorkflow"
        ]
      },
      "pluginRefs": [],
      "mdmRefs": [],
      "pageInputs": [],
      "navigationRefs": [],
      "sections": [
        {
          "sectionName": "Resumo operacional",
          "mode": "view",
          "organisms": [
            {
              "organismName": "cardsResumoOperacional",
              "purpose": "Exibir indicadores operacionais consolidados.",
              "userActions": [
                "viewDashboard"
              ],
              "requiredEntities": [],
              "readsFields": [
                "openServiceOrders",
                "monthlyRevenue",
                "upcomingMaintenance",
                "lowStockCount"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleRoleAccess"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "getOperationalSummary",
        "purpose": "Carregar indicadores operacionais",
        "kind": "query",
        "input": [],
        "output": [
          {
            "name": "openServiceOrders",
            "type": "number"
          },
          {
            "name": "monthlyRevenue",
            "type": "number"
          },
          {
            "name": "upcomingMaintenance",
            "type": "number"
          },
          {
            "name": "lowStockCount",
            "type": "number"
          }
        ],
        "readsEntities": [],
        "writesEntities": [],
        "readsTables": [
          "service_order_metrics",
          "inventory_metrics",
          "invoice_metrics",
          "maintenance_forecast_metrics"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "viewDashboardMetrics"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleRoleAccess"
        ]
      }
    ]
  }
} as const;

export default vehicleListPagePlan;
