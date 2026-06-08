/// <mls fileReference="_102044_/l2/repairBay/customerDetail.defs.ts" enhancement="_blank"/>

export const customerDetailPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "customerDetail",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 58,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "customerDetail",
      "pageName": "Criar ordem de serviço",
      "actor": "attendant",
      "purpose": "Registrar nova OS com cliente, veículo e itens iniciais.",
      "capabilities": [
        "serviceOrderLifecycle"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [
          "serviceOrderWorkflow"
        ],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "serviceOrder",
        "customer",
        "vehicle",
        "partInventory"
      ],
      "pageInputs": [
        {
          "name": "customerId",
          "type": "string",
          "required": true,
          "sources": [
            "previousStepResult",
            "routeParam"
          ],
          "description": "Identificador do cliente selecionado para a OS.",
          "entityRef": "Customer",
          "fieldRef": "customerId"
        },
        {
          "name": "vehicleId",
          "type": "string",
          "required": true,
          "sources": [
            "previousStepResult",
            "routeParam"
          ],
          "description": "Identificador do veículo selecionado para a OS.",
          "entityRef": "Vehicle",
          "fieldRef": "vehicleId"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "serviceOrderList",
          "trigger": "Ação criar OS"
        },
        {
          "direction": "outbound",
          "pageId": "serviceOrderDetail",
          "trigger": "OS criada"
        }
      ],
      "sections": [
        {
          "sectionName": "Resumo do cliente e veículo",
          "mode": "view",
          "organisms": [
            {
              "organismName": "customerVehicleSummary",
              "purpose": "Exibir cliente e veículo selecionados antes da criação da OS.",
              "userActions": [
                "confirmarSelecao"
              ],
              "requiredEntities": [
                "Customer",
                "Vehicle"
              ],
              "readsFields": [
                "Customer.customerId",
                "Customer.name",
                "Customer.phone",
                "Vehicle.vehicleId",
                "Vehicle.plate",
                "Vehicle.model",
                "Vehicle.year"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleVehicleCustomerLink",
                "ruleRoleAccess"
              ]
            }
          ]
        },
        {
          "sectionName": "Dados iniciais da OS",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "serviceOrderNotesForm",
              "purpose": "Registrar observações iniciais da OS.",
              "userActions": [
                "preencherObservacoes"
              ],
              "requiredEntities": [
                "ServiceOrder"
              ],
              "readsFields": [],
              "writesFields": [
                "ServiceOrder.notes"
              ],
              "rulesApplied": [
                "ruleRoleAccess"
              ]
            }
          ]
        },
        {
          "sectionName": "Confirmação de criação",
          "mode": "confirm",
          "organisms": [
            {
              "organismName": "serviceOrderCreateAction",
              "purpose": "Confirmar criação da OS com cliente e veículo selecionados.",
              "userActions": [
                "criarOS"
              ],
              "requiredEntities": [
                "ServiceOrder",
                "ServiceOrderCommand",
                "Customer",
                "Vehicle"
              ],
              "readsFields": [
                "Customer.customerId",
                "Vehicle.vehicleId",
                "ServiceOrder.notes"
              ],
              "writesFields": [
                "ServiceOrder.serviceOrderId",
                "ServiceOrder.status",
                "ServiceOrder.total",
                "ServiceOrderCommand.serviceOrderCommandId"
              ],
              "rulesApplied": [
                "ruleVehicleCustomerLink",
                "ruleServiceOrderTotal",
                "ruleRoleAccess"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "initServiceOrder",
        "purpose": "Criar OS e retornar identificador e status inicial.",
        "kind": "command",
        "input": [
          {
            "name": "customerId",
            "type": "string",
            "required": true
          },
          {
            "name": "vehicleId",
            "type": "string",
            "required": true
          },
          {
            "name": "notes",
            "type": "string",
            "required": false
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
          }
        ],
        "readsEntities": [
          "Customer",
          "Vehicle"
        ],
        "writesEntities": [
          "ServiceOrder",
          "ServiceOrderCommand"
        ],
        "readsTables": [],
        "writesTables": [
          "service_order_command_log",
          "service_order_metrics"
        ],
        "usecaseRefs": [
          "createServiceOrder"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleVehicleCustomerLink",
          "ruleServiceOrderTotal",
          "ruleRoleAccess"
        ]
      }
    ]
  }
} as const;

export default customerDetailPagePlan;
