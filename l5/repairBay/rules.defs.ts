/// <mls fileReference="_102044_/l5/repairBay/rules.defs.ts" enhancement="_blank"/>

export const rulesPlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "rules",
  "artifactId": "repairBayRules",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentFinalizeSolutionPlan",
    "stepId": 11,
    "planId": "plan-finalize-solution-plan"
  },
  "data": {
    "moduleName": "repairBay",
    "rules": [
      {
        "ruleId": "ruleServiceOrderStatus",
        "title": "Status da OS",
        "description": "A OS deve seguir um ciclo de vida padronizado: aberta → em execução → aguardando peça → concluída → fechada/cancelada.",
        "appliesTo": [
          "ServiceOrder"
        ],
        "layer": "layer_1"
      },
      {
        "ruleId": "ruleServiceOrderTotal",
        "title": "Cálculo de total da OS",
        "description": "O total da OS é a soma de itens de mão de obra e peças usadas, com impostos/descontos configurados.",
        "appliesTo": [
          "ServiceOrder",
          "LaborItem",
          "Part"
        ],
        "layer": "layer_1"
      },
      {
        "ruleId": "ruleVehicleCustomerLink",
        "title": "Vínculo veículo-cliente obrigatório",
        "description": "Todo veículo deve estar associado a um cliente ativo.",
        "appliesTo": [
          "Vehicle",
          "Customer"
        ],
        "layer": "layer_1"
      },
      {
        "ruleId": "ruleInventoryLowStock",
        "title": "Alerta de estoque baixo",
        "description": "Quando o estoque estiver abaixo do nível mínimo configurado, deve ser gerado alerta operacional.",
        "appliesTo": [
          "InventoryStock",
          "Part"
        ],
        "layer": "layer_1"
      },
      {
        "ruleId": "ruleInvoiceFromServiceOrder",
        "title": "Fatura vinculada à OS",
        "description": "Faturas devem ser geradas a partir de uma OS concluída e conter o total consolidado.",
        "appliesTo": [
          "Invoice",
          "ServiceOrder"
        ],
        "layer": "layer_1"
      },
      {
        "ruleId": "ruleMaintenanceForecast",
        "title": "Manutenção prevista",
        "description": "Veículos com histórico de serviços recorrentes devem ser marcados com manutenção prevista.",
        "appliesTo": [
          "MaintenanceForecast",
          "Vehicle",
          "ServiceOrder"
        ],
        "layer": "layer_2"
      },
      {
        "ruleId": "ruleRoleAccess",
        "title": "Acesso por perfil",
        "description": "Dono, atendente e mecânico possuem permissões distintas por funcionalidade.",
        "appliesTo": [
          "Customer",
          "Vehicle",
          "ServiceOrder",
          "Invoice",
          "Part",
          "InventoryStock",
          "MaintenanceForecast"
        ],
        "layer": "layer_2"
      }
    ]
  }
} as const;

export default rulesPlan;
