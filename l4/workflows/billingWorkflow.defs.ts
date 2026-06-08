/// <mls fileReference="_102044_/l4/workflows/billingWorkflow.defs.ts" enhancement="_blank"/>

export const billingWorkflowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "billingWorkflow",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 54,
    "planId": ""
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "billingWorkflow",
      "title": "Fluxo de Faturamento",
      "purpose": "Controlar a geração de faturas a partir de ordens de serviço concluídas e acompanhar seus status até a quitação.",
      "executionMode": "entityLifecycle",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "shopOwner"
      ],
      "states": [
        {
          "stateId": "draft",
          "description": "Fatura preparada para emissão a partir de uma OS concluída."
        },
        {
          "stateId": "issued",
          "description": "Fatura emitida e aguardando pagamento."
        },
        {
          "stateId": "paid",
          "description": "Fatura quitada."
        },
        {
          "stateId": "canceled",
          "description": "Fatura cancelada."
        }
      ],
      "transitions": [
        {
          "from": "draft",
          "to": "issued",
          "trigger": "generateInvoice",
          "actor": "shopOwner",
          "conditions": [
            "ruleInvoiceFromServiceOrder",
            "ruleRoleAccess"
          ],
          "actions": [],
          "rulesApplied": [
            "ruleInvoiceFromServiceOrder",
            "ruleRoleAccess"
          ]
        },
        {
          "from": "issued",
          "to": "paid",
          "trigger": "markInvoicePaid",
          "actor": "shopOwner",
          "conditions": [
            "ruleRoleAccess"
          ],
          "actions": [],
          "rulesApplied": [
            "ruleRoleAccess"
          ]
        },
        {
          "from": "draft",
          "to": "canceled",
          "trigger": "cancelInvoice",
          "actor": "shopOwner",
          "conditions": [
            "ruleRoleAccess"
          ],
          "actions": [],
          "rulesApplied": [
            "ruleRoleAccess"
          ]
        },
        {
          "from": "issued",
          "to": "canceled",
          "trigger": "cancelInvoice",
          "actor": "shopOwner",
          "conditions": [
            "ruleRoleAccess"
          ],
          "actions": [],
          "rulesApplied": [
            "ruleRoleAccess"
          ]
        }
      ],
      "requiredEntities": [
        "Invoice",
        "ServiceOrder",
        "InvoiceCommand"
      ],
      "persistenceRefs": [],
      "usecaseRefs": [
        "invoiceUsecaseEntities"
      ],
      "metricRefs": [
        "invoiceMetrics"
      ],
      "userActions": [
        "generateInvoice",
        "markInvoicePaid",
        "cancelInvoice"
      ],
      "relatedPages": [],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleInvoiceFromServiceOrder",
        "ruleRoleAccess"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "invoiceFromClosedSO",
          "title": "Permitir fatura apenas de OS concluída",
          "priority": "soon",
          "description": "Validar no caso de uso que a OS esteja concluída antes de emitir a fatura, garantindo o vínculo obrigatório.",
          "tradeoff": "Pode impedir emissão rápida em exceções operacionais."
        },
        {
          "suggestionId": "linkInvoiceToSO",
          "title": "Vincular fatura à OS no workflow",
          "priority": "soon",
          "description": "Persistir o vínculo entre fatura e OS para rastreabilidade e consultas futuras.",
          "tradeoff": "Requer ajustes de persistência e validação no caso de uso."
        },
        {
          "suggestionId": "noManualTask",
          "title": "Não gerar tarefas manuais no faturamento",
          "priority": "later",
          "description": "Manter o fluxo como ciclo de vida da entidade, sem tarefas, pois a emissão e quitação podem ser feitas diretamente pelo dono da oficina.",
          "tradeoff": "Sem tarefas, não há fila de trabalho dedicada para cobrança ativa."
        }
      ],
      "workflowScope": "singleModule",
      "moduleRefs": [
        "repairBay"
      ],
      "pageRefsByModule": [],
      "entityRefsByModule": [
        {
          "moduleId": "repairBay",
          "entity": "Invoice"
        },
        {
          "moduleId": "repairBay",
          "entity": "ServiceOrder"
        },
        {
          "moduleId": "repairBay",
          "entity": "InvoiceCommand"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "repairBay",
          "artifactType": "workflow",
          "artifactId": "billingWorkflow"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/billingWorkflow.defs.ts",
      "exportName": "billingWorkflowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default billingWorkflowDef;
