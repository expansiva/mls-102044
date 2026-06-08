/// <mls fileReference="_102044_/l2/repairBay/vehicleDetail.defs.ts" enhancement="_blank"/>

export const vehicleDetailPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "vehicleDetail",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 60,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "vehicleDetail",
      "pageName": "Detalhe do veículo",
      "actor": "attendant",
      "purpose": "Cadastrar ou atualizar informações do veículo e vínculo com cliente.",
      "capabilities": [
        "manageVehicles"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "vehicle",
        "customer"
      ],
      "pageInputs": [
        {
          "name": "vehicleId",
          "type": "string",
          "required": false,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "Identificador do veículo para edição.",
          "entityRef": "Vehicle",
          "fieldRef": "Vehicle.id"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "vehicleList",
          "trigger": "Abrir veículo ou criar novo"
        },
        {
          "direction": "outbound",
          "pageId": "vehicleList",
          "trigger": "Salvar veículo",
          "description": "Retorno após criação/atualização do veículo."
        }
      ],
      "sections": [
        {
          "sectionName": "Dados do veículo",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "VehicleForm",
              "purpose": "Cadastrar ou editar dados do veículo.",
              "userActions": [
                "preencherDadosVeiculo",
                "salvarVeiculo"
              ],
              "requiredEntities": [
                "Vehicle"
              ],
              "readsFields": [
                "Vehicle.id",
                "Vehicle.make",
                "Vehicle.model",
                "Vehicle.year",
                "Vehicle.plate",
                "Vehicle.vin"
              ],
              "writesFields": [
                "Vehicle.make",
                "Vehicle.model",
                "Vehicle.year",
                "Vehicle.plate",
                "Vehicle.vin"
              ],
              "rulesApplied": [
                "ruleRoleAccess"
              ]
            }
          ]
        },
        {
          "sectionName": "Vínculo com cliente",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "CustomerSelector",
              "purpose": "Selecionar cliente ativo para vínculo do veículo.",
              "userActions": [
                "buscarCliente",
                "selecionarCliente"
              ],
              "requiredEntities": [
                "Customer"
              ],
              "readsFields": [
                "Customer.id",
                "Customer.name",
                "Customer.status"
              ],
              "writesFields": [
                "Vehicle.customerId"
              ],
              "rulesApplied": [
                "ruleVehicleCustomerLink",
                "ruleRoleAccess"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "getVehicle",
        "purpose": "Carregar dados do veículo para edição.",
        "kind": "query",
        "input": [
          {
            "name": "vehicleRef",
            "type": "string",
            "required": true
          }
        ],
        "output": [
          {
            "name": "vehicleId",
            "type": "string"
          },
          {
            "name": "make",
            "type": "string"
          },
          {
            "name": "model",
            "type": "string"
          },
          {
            "name": "year",
            "type": "number"
          },
          {
            "name": "plate",
            "type": "string"
          },
          {
            "name": "vin",
            "type": "string"
          },
          {
            "name": "customerId",
            "type": "string"
          },
          {
            "name": "customerName",
            "type": "string"
          },
          {
            "name": "customerStatus",
            "type": "string"
          }
        ],
        "readsEntities": [
          "Vehicle",
          "Customer"
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
          "ruleRoleAccess"
        ]
      },
      {
        "commandName": "searchCustomers",
        "purpose": "Buscar clientes para seleção de vínculo.",
        "kind": "query",
        "input": [
          {
            "name": "searchTerm",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "customerId",
            "type": "string"
          },
          {
            "name": "customerName",
            "type": "string"
          },
          {
            "name": "customerStatus",
            "type": "string"
          }
        ],
        "readsEntities": [
          "Customer"
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
          "ruleRoleAccess"
        ]
      },
      {
        "commandName": "saveVehicle",
        "purpose": "Criar ou atualizar veículo com vínculo ao cliente.",
        "kind": "mutation",
        "input": [
          {
            "name": "vehicleRef",
            "type": "string",
            "required": false
          },
          {
            "name": "customerId",
            "type": "string",
            "required": true
          },
          {
            "name": "make",
            "type": "string",
            "required": true
          },
          {
            "name": "model",
            "type": "string",
            "required": true
          },
          {
            "name": "year",
            "type": "number",
            "required": false
          },
          {
            "name": "plate",
            "type": "string",
            "required": true
          },
          {
            "name": "vin",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "vehicleId",
            "type": "string"
          }
        ],
        "readsEntities": [
          "Customer"
        ],
        "writesEntities": [
          "Vehicle"
        ],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleVehicleCustomerLink",
          "ruleRoleAccess"
        ]
      }
    ]
  }
} as const;

export default vehicleDetailPagePlan;
