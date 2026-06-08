/// <mls fileReference="_102044_/l1/repairBay/layer_3_usecases/viewDashboardMetrics.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "viewDashboardMetrics",
  "title": "Visualizar dashboard operacional",
  "purpose": "Consultar métricas operacionais consolidadas para o painel.",
  "actor": "shopOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [],
  "readsTables": [
    {
      "tableName": "service_order_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "invoice_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "maintenance_forecast_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "commands": [
    {
      "commandId": "viewDashboardMetrics",
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
      ]
    }
  ],
  "rulesApplied": [
    "ruleRoleAccess"
  ]
} as const;

export default useCase;
