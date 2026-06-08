/// <mls fileReference="_102044_/l2/repairBay/serviceOrderList.defs.ts" enhancement="_blank"/>

export const serviceOrderListPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "serviceOrderList",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 61,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "serviceOrderList",
      "pageName": "Gerar fatura",
      "actor": "shopOwner",
      "purpose": "Selecionar OS e confirmar geração de fatura.",
      "capabilities": [
        "billingManagement"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "billingWorkflow"
        ],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "invoice",
        "serviceOrder"
      ],
      "pageInputs": [
        {
          "name": "serviceOrderId",
          "type": "string",
          "required": true,
          "sources": [
            "previousStepResult",
            "routeParam"
          ],
          "description": "Identificador da OS selecionada para gerar a fatura.",
          "entityRef": "ServiceOrder",
          "fieldRef": "serviceOrderId"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "invoiceList",
          "trigger": "Ação gerar fatura"
        },
        {
          "direction": "outbound",
          "pageId": "invoiceDetail",
          "trigger": "Fatura gerada"
        }
      ],
      "sections": [
        {
          "sectionName": "Resumo da OS",
          "mode": "view",
          "organisms": [
            {
              "organismName": "serviceOrderSummary",
              "purpose": "Exibir dados essenciais da OS para validação antes da emissão da fatura.",
              "userActions": [],
              "requiredEntities": [
                "ServiceOrder"
              ],
              "readsFields": [
                "serviceOrderId",
                "status",
                "total",
                "customerName",
                "vehiclePlate",
                "closedAt"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleServiceOrderTotal",
                "ruleRoleAccess"
              ]
            }
          ]
        },
        {
          "sectionName": "Condições de pagamento",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "paymentTermsForm",
              "purpose": "Informar condições de pagamento para a fatura.",
              "userActions": [
                "informPaymentTerms"
              ],
              "requiredEntities": [
                "Invoice"
              ],
              "readsFields": [],
              "writesFields": [
                "paymentTerms",
                "dueDate",
                "paymentMethod"
              ],
              "rulesApplied": [
                "ruleRoleAccess"
              ]
            }
          ]
        },
        {
          "sectionName": "Confirmação de emissão",
          "mode": "commit",
          "organisms": [
            {
              "organismName": "generateInvoiceAction",
              "purpose": "Confirmar geração da fatura vinculada à OS.",
              "userActions": [
                "generateInvoice"
              ],
              "requiredEntities": [
                "Invoice",
                "ServiceOrder",
                "InvoiceCommand"
              ],
              "readsFields": [
                "serviceOrderId",
                "total",
                "paymentTerms",
                "dueDate",
                "paymentMethod"
              ],
              "writesFields": [
                "invoiceId",
                "status",
                "serviceOrderId",
                "total"
              ],
              "rulesApplied": [
                "ruleInvoiceFromServiceOrder",
                "ruleRoleAccess"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "getServiceOrderSummaryForInvoice",
        "purpose": "Consultar dados resumidos da OS para confirmação de faturamento.",
        "kind": "query",
        "input": [
          {
            "name": "serviceOrderId",
            "type": "string",
            "required": true
          }
        ],
        "output": [
          {
            "name": "serviceOrderId",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "total",
            "type": "number"
          },
          {
            "name": "customerName",
            "type": "string"
          },
          {
            "name": "vehiclePlate",
            "type": "string"
          },
          {
            "name": "closedAt",
            "type": "date"
          }
        ],
        "readsEntities": [
          "ServiceOrder"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleServiceOrderTotal",
          "ruleRoleAccess"
        ]
      },
      {
        "commandName": "createInvoiceFromServiceOrder",
        "purpose": "Gerar fatura a partir da OS com condições de pagamento.",
        "kind": "command",
        "input": [
          {
            "name": "serviceOrderId",
            "type": "string",
            "required": true
          },
          {
            "name": "paymentTerms",
            "type": "string",
            "required": false
          },
          {
            "name": "dueDate",
            "type": "date",
            "required": false
          },
          {
            "name": "paymentMethod",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "invoiceId",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "total",
            "type": "number"
          }
        ],
        "readsEntities": [
          "ServiceOrder"
        ],
        "writesEntities": [
          "Invoice",
          "InvoiceCommand"
        ],
        "readsTables": [],
        "writesTables": [
          "invoice_metrics"
        ],
        "usecaseRefs": [
          "generateInvoice"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleInvoiceFromServiceOrder",
          "ruleRoleAccess"
        ]
      }
    ]
  }
} as const;

export default serviceOrderListPagePlan;
