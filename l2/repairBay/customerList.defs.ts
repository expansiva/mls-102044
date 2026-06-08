/// <mls fileReference="_102044_/l2/repairBay/customerList.defs.ts" enhancement="_blank"/>

export const customerListPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "customerList",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 57,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "customerList",
      "pageName": "Dashboard de métricas",
      "actor": "shopOwner",
      "purpose": "Acompanhar métricas consolidadas do negócio.",
      "capabilities": [
        "dashboardInsights"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [],
      "pageInputs": [],
      "navigationRefs": [],
      "sections": [
        {
          "sectionName": "Resumo de métricas",
          "mode": "view",
          "organisms": [
            {
              "organismName": "cardsResumoMetricas",
              "purpose": "Exibir indicadores consolidados do negócio.",
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
        },
        {
          "sectionName": "Detalhamento de métricas",
          "mode": "view",
          "organisms": [
            {
              "organismName": "tabelaMetricasConsolidadas",
              "purpose": "Apresentar tabelas consolidadas de métricas operacionais.",
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
        "commandName": "getMetricDashboard",
        "purpose": "Carregar tabelas de métricas",
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

export default customerListPagePlan;
