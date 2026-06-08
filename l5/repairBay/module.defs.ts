/// <mls fileReference="_102044_/l5/repairBay/module.defs.ts" enhancement="_blank"/>

export const modulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "module",
  "artifactId": "repairBay",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentFinalizeSolutionPlan",
    "stepId": 11,
    "planId": "plan-finalize-solution-plan"
  },
  "data": {
    "module": {
      "moduleName": "repairBay",
      "purpose": "Organizar ordens de serviço e histórico de veículos com custos precisos, controle de peças e faturamento para oficinas mecânicas independentes.",
      "businessDomain": "Oficina mecânica independente",
      "languages": [
        "pt-BR",
        "en"
      ],
      "visualStyle": {
        "tone": "Profissional e moderno",
        "layout": "Limpo, focado em fluxo rápido de OS e histórico",
        "palette": [
          "#1F2937",
          "#374151",
          "#0EA5E9",
          "#10B981",
          "#F59E0B"
        ]
      }
    },
    "actors": [
      {
        "actorId": "shopOwner",
        "title": "Dono da oficina",
        "description": "Responsável por visão geral do negócio, faturamento e indicadores."
      },
      {
        "actorId": "attendant",
        "title": "Atendente",
        "description": "Registra clientes/veículos e cria/acompanha ordens de serviço."
      },
      {
        "actorId": "mechanic",
        "title": "Mecânico",
        "description": "Executa serviços, registra mão de obra e peças usadas na OS."
      }
    ],
    "capabilities": [
      {
        "capabilityId": "manageCustomers",
        "title": "Gerenciar clientes",
        "description": "Cadastrar e manter dados de clientes e histórico associado.",
        "actor": "attendant",
        "priority": "now"
      },
      {
        "capabilityId": "manageVehicles",
        "title": "Gerenciar veículos",
        "description": "Cadastrar veículos com marca/modelo/ano/placa/VIN e associar ao cliente.",
        "actor": "attendant",
        "priority": "now"
      },
      {
        "capabilityId": "serviceOrderLifecycle",
        "title": "Criar e acompanhar OS",
        "description": "Criar OS, registrar itens de mão de obra e peças usadas, atualizar status e total.",
        "actor": "attendant",
        "priority": "now"
      },
      {
        "capabilityId": "serviceOrderExecution",
        "title": "Executar serviços na OS",
        "description": "Registrar serviços executados, tempos e peças utilizadas na OS.",
        "actor": "mechanic",
        "priority": "now"
      },
      {
        "capabilityId": "vehicleHistory",
        "title": "Histórico completo do veículo e cliente",
        "description": "Consultar histórico de serviços, peças e custos por veículo/cliente.",
        "actor": "shopOwner",
        "priority": "now"
      },
      {
        "capabilityId": "partsInventoryControl",
        "title": "Controle de peças e estoque",
        "description": "Gerir peças, níveis de estoque e alertas de reposição.",
        "actor": "shopOwner",
        "priority": "now"
      },
      {
        "capabilityId": "billingManagement",
        "title": "Faturamento",
        "description": "Gerar faturas vinculadas às OS e acompanhar valores.",
        "actor": "shopOwner",
        "priority": "now"
      },
      {
        "capabilityId": "dashboardInsights",
        "title": "Dashboard operacional",
        "description": "Visualizar OS abertas, receita do mês e veículos com manutenção prevista.",
        "actor": "shopOwner",
        "priority": "now"
      },
      {
        "capabilityId": "llmRepairSuggestions",
        "title": "IA para sugestões de reparo e tempo",
        "description": "Sugerir reparos comuns por modelo/ano e estimar tempo de mão de obra a partir da descrição.",
        "actor": "mechanic",
        "priority": "soon"
      }
    ],
    "ontology": {
      "entities": {
        "Customer": {
          "title": "Cliente",
          "description": "Pessoa ou empresa atendida pela oficina, vinculada a veículos e OS."
        },
        "Vehicle": {
          "title": "Veículo",
          "description": "Veículo do cliente com dados de identificação e histórico de manutenção."
        },
        "ServiceOrder": {
          "title": "Ordem de Serviço",
          "description": "Compromisso de execução de serviços e peças para um veículo, com custos e status."
        },
        "LaborItem": {
          "title": "Item de Mão de Obra",
          "description": "Registro de serviço executado com tempo e custo associado à OS."
        },
        "Part": {
          "title": "Peça",
          "description": "Item de estoque utilizado em reparos e OS."
        },
        "InventoryStock": {
          "title": "Estoque",
          "description": "Níveis de peças disponíveis e parâmetros de reposição."
        },
        "Invoice": {
          "title": "Fatura",
          "description": "Documento interno de cobrança associado a uma OS."
        },
        "MaintenanceForecast": {
          "title": "Manutenção Prevista",
          "description": "Sinalização de manutenção futura com base em histórico e tempo/quilometragem."
        },
        "RepairSuggestion": {
          "title": "Sugestão de Reparo",
          "description": "Resposta da IA com reparos comuns para modelo/ano e estimativa de tempo."
        },
        "ServiceOrderCommand": {
          "title": "Comando de OS",
          "description": "Entidade de caso de uso para criação, atualização e fechamento da OS."
        },
        "InventoryAdjustmentCommand": {
          "title": "Comando de Ajuste de Estoque",
          "description": "Entidade de caso de uso para ajuste de níveis e disparo de alertas."
        },
        "InvoiceCommand": {
          "title": "Comando de Fatura",
          "description": "Entidade de caso de uso para geração e atualização de faturas."
        },
        "MaintenanceForecastCommand": {
          "title": "Comando de Manutenção Prevista",
          "description": "Entidade de caso de uso para gerar/atualizar previsões de manutenção com base no histórico."
        }
      }
    },
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
    ],
    "relationships": [
      {
        "relationshipId": "relCustomerVehicle",
        "fromEntity": "Customer",
        "toEntity": "Vehicle",
        "type": "oneToMany",
        "description": "Cliente possui um ou mais veículos."
      },
      {
        "relationshipId": "relVehicleServiceOrder",
        "fromEntity": "Vehicle",
        "toEntity": "ServiceOrder",
        "type": "oneToMany",
        "description": "Veículo pode ter várias ordens de serviço."
      },
      {
        "relationshipId": "relServiceOrderLaborItem",
        "fromEntity": "ServiceOrder",
        "toEntity": "LaborItem",
        "type": "oneToMany",
        "description": "OS agrega itens de mão de obra."
      },
      {
        "relationshipId": "relServiceOrderPart",
        "fromEntity": "ServiceOrder",
        "toEntity": "Part",
        "type": "manyToMany",
        "description": "OS utiliza peças do estoque."
      },
      {
        "relationshipId": "relPartInventoryStock",
        "fromEntity": "Part",
        "toEntity": "InventoryStock",
        "type": "oneToOne",
        "description": "Cada peça possui um registro de estoque associado."
      },
      {
        "relationshipId": "relServiceOrderInvoice",
        "fromEntity": "ServiceOrder",
        "toEntity": "Invoice",
        "type": "oneToOne",
        "description": "OS gera uma fatura vinculada."
      },
      {
        "relationshipId": "relVehicleMaintenanceForecast",
        "fromEntity": "Vehicle",
        "toEntity": "MaintenanceForecast",
        "type": "oneToMany",
        "description": "Veículo pode ter previsões de manutenção."
      },
      {
        "relationshipId": "relServiceOrderCommand",
        "fromEntity": "ServiceOrderCommand",
        "toEntity": "ServiceOrder",
        "type": "writes",
        "description": "Comando de OS cria/atualiza a OS."
      },
      {
        "relationshipId": "relInventoryAdjustmentCommand",
        "fromEntity": "InventoryAdjustmentCommand",
        "toEntity": "InventoryStock",
        "type": "writes",
        "description": "Comando ajusta níveis de estoque e alerta."
      },
      {
        "relationshipId": "relInvoiceCommand",
        "fromEntity": "InvoiceCommand",
        "toEntity": "Invoice",
        "type": "writes",
        "description": "Comando gera ou atualiza fatura."
      },
      {
        "relationshipId": "relRepairSuggestionVehicle",
        "fromEntity": "RepairSuggestion",
        "toEntity": "Vehicle",
        "type": "manyToOne",
        "description": "Sugestão de reparo é contextualizada por veículo."
      },
      {
        "relationshipId": "relRepairSuggestionServiceOrder",
        "fromEntity": "RepairSuggestion",
        "toEntity": "ServiceOrder",
        "type": "optionalManyToOne",
        "description": "Sugestão pode estar vinculada a uma OS específica quando solicitada."
      },
      {
        "relationshipId": "relMaintenanceForecastCommand",
        "fromEntity": "MaintenanceForecastCommand",
        "toEntity": "MaintenanceForecast",
        "type": "writes",
        "description": "Comando gera/atualiza previsões de manutenção."
      }
    ],
    "userActions": [
      {
        "actionId": "createCustomer",
        "title": "Cadastrar cliente",
        "actor": "attendant",
        "capabilityId": "manageCustomers",
        "description": "Criar registro de cliente com dados de contato.",
        "commandType": "create",
        "affectedEntities": [
          "Customer"
        ],
        "rulesApplied": [
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "updateCustomer",
        "title": "Atualizar cliente",
        "actor": "attendant",
        "capabilityId": "manageCustomers",
        "description": "Editar dados do cliente.",
        "commandType": "update",
        "affectedEntities": [
          "Customer"
        ],
        "rulesApplied": [
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "createVehicle",
        "title": "Cadastrar veículo",
        "actor": "attendant",
        "capabilityId": "manageVehicles",
        "description": "Cadastrar veículo com marca/modelo/ano/placa/VIN e vínculo ao cliente.",
        "commandType": "create",
        "affectedEntities": [
          "Vehicle"
        ],
        "rulesApplied": [
          "ruleVehicleCustomerLink",
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "updateVehicle",
        "title": "Atualizar veículo",
        "actor": "attendant",
        "capabilityId": "manageVehicles",
        "description": "Editar dados do veículo.",
        "commandType": "update",
        "affectedEntities": [
          "Vehicle"
        ],
        "rulesApplied": [
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "createServiceOrder",
        "title": "Criar OS",
        "actor": "attendant",
        "capabilityId": "serviceOrderLifecycle",
        "description": "Criar OS para um veículo e cliente.",
        "commandType": "create",
        "affectedEntities": [
          "ServiceOrder",
          "ServiceOrderCommand"
        ],
        "rulesApplied": [
          "ruleVehicleCustomerLink",
          "ruleServiceOrderStatus",
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "addLaborItem",
        "title": "Adicionar mão de obra",
        "actor": "mechanic",
        "capabilityId": "serviceOrderExecution",
        "description": "Registrar serviço executado com tempo e custo.",
        "commandType": "update",
        "affectedEntities": [
          "LaborItem",
          "ServiceOrder",
          "ServiceOrderCommand"
        ],
        "rulesApplied": [
          "ruleServiceOrderTotal",
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "addPartToServiceOrder",
        "title": "Adicionar peça à OS",
        "actor": "mechanic",
        "capabilityId": "serviceOrderExecution",
        "description": "Registrar peça utilizada e baixar estoque.",
        "commandType": "update",
        "affectedEntities": [
          "Part",
          "InventoryStock",
          "ServiceOrder",
          "ServiceOrderCommand",
          "InventoryAdjustmentCommand"
        ],
        "rulesApplied": [
          "ruleServiceOrderTotal",
          "ruleInventoryLowStock",
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "updateServiceOrderStatus",
        "title": "Atualizar status da OS",
        "actor": "attendant",
        "capabilityId": "serviceOrderLifecycle",
        "description": "Mover OS pelo ciclo de vida até fechamento/cancelamento.",
        "commandType": "update",
        "affectedEntities": [
          "ServiceOrder",
          "ServiceOrderCommand"
        ],
        "rulesApplied": [
          "ruleServiceOrderStatus",
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "closeServiceOrder",
        "title": "Fechar OS",
        "actor": "attendant",
        "capabilityId": "serviceOrderLifecycle",
        "description": "Confirmar conclusão e fechamento da OS.",
        "commandType": "update",
        "affectedEntities": [
          "ServiceOrder",
          "ServiceOrderCommand"
        ],
        "rulesApplied": [
          "ruleServiceOrderStatus",
          "ruleServiceOrderTotal",
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "adjustInventory",
        "title": "Ajustar estoque",
        "actor": "shopOwner",
        "capabilityId": "partsInventoryControl",
        "description": "Atualizar níveis de estoque e mínimos por peça.",
        "commandType": "update",
        "affectedEntities": [
          "InventoryStock",
          "InventoryAdjustmentCommand"
        ],
        "rulesApplied": [
          "ruleInventoryLowStock",
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "generateInvoice",
        "title": "Gerar fatura",
        "actor": "shopOwner",
        "capabilityId": "billingManagement",
        "description": "Gerar fatura a partir da OS concluída.",
        "commandType": "create",
        "affectedEntities": [
          "Invoice",
          "InvoiceCommand"
        ],
        "rulesApplied": [
          "ruleInvoiceFromServiceOrder",
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "updateInvoiceStatus",
        "title": "Atualizar status da fatura",
        "actor": "shopOwner",
        "capabilityId": "billingManagement",
        "description": "Atualizar status de faturamento interno.",
        "commandType": "update",
        "affectedEntities": [
          "Invoice",
          "InvoiceCommand"
        ],
        "rulesApplied": [
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "viewVehicleHistory",
        "title": "Consultar histórico do veículo",
        "actor": "shopOwner",
        "capabilityId": "vehicleHistory",
        "description": "Visualizar histórico completo de serviços e custos do veículo e cliente.",
        "commandType": "read",
        "affectedEntities": [
          "Vehicle",
          "Customer",
          "ServiceOrder",
          "Invoice"
        ],
        "rulesApplied": [
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "viewDashboard",
        "title": "Visualizar dashboard",
        "actor": "shopOwner",
        "capabilityId": "dashboardInsights",
        "description": "Acessar indicadores operacionais principais.",
        "commandType": "read",
        "affectedEntities": [
          "ServiceOrder",
          "Invoice",
          "InventoryStock",
          "MaintenanceForecast"
        ],
        "rulesApplied": [
          "ruleRoleAccess"
        ]
      },
      {
        "actionId": "requestRepairSuggestion",
        "title": "Solicitar sugestão de reparo",
        "actor": "mechanic",
        "capabilityId": "llmRepairSuggestions",
        "description": "Pedir à IA reparos comuns por modelo/ano ou estimativa de tempo de mão de obra.",
        "commandType": "read",
        "affectedEntities": [
          "RepairSuggestion",
          "Vehicle",
          "ServiceOrder"
        ],
        "rulesApplied": [
          "ruleRoleAccess"
        ]
      }
    ],
    "approvedArtifacts": {
      "pages": [
        {
          "signal": "dashboardPage",
          "title": "Dashboard",
          "reason": "Visão rápida de OS abertas, receita do mês e manutenção prevista.",
          "priority": "now",
          "actor": "shopOwner",
          "artifactType": "page",
          "references": [
            "openServiceOrdersMetric",
            "monthlyRevenueMetric",
            "upcomingMaintenanceMetric",
            "inventoryLowStockMetric",
            "metricTableOps"
          ],
          "rulesApplied": [
            "ruleRoleAccess"
          ]
        },
        {
          "signal": "vehicleHistoryPage",
          "title": "Histórico de Veículo e Cliente",
          "reason": "Histórico completo por veículo/cliente é foco central do produto.",
          "priority": "now",
          "actor": "attendant",
          "artifactType": "page",
          "references": [
            "Customer",
            "Vehicle",
            "ServiceOrder",
            "Invoice"
          ],
          "rulesApplied": [
            "ruleRoleAccess"
          ]
        },
        {
          "signal": "serviceOrderListPage",
          "title": "Ordens de Serviço",
          "reason": "Listagem e acesso rápido para criação e acompanhamento.",
          "priority": "now",
          "actor": "attendant",
          "artifactType": "page",
          "references": [
            "ServiceOrder"
          ],
          "rulesApplied": [
            "ruleServiceOrderStatus",
            "ruleRoleAccess"
          ]
        },
        {
          "signal": "serviceOrderDetailPage",
          "title": "Detalhe da Ordem de Serviço",
          "reason": "Registrar mão de obra, peças usadas, status e total.",
          "priority": "now",
          "actor": "mechanic",
          "artifactType": "page",
          "references": [
            "ServiceOrder",
            "LaborItem",
            "Part"
          ],
          "rulesApplied": [
            "ruleServiceOrderTotal",
            "ruleServiceOrderStatus",
            "ruleRoleAccess"
          ]
        },
        {
          "signal": "partsInventoryPage",
          "title": "Controle de Peças/Estoque",
          "reason": "Gestão de peças, níveis de estoque e alertas.",
          "priority": "now",
          "actor": "shopOwner",
          "artifactType": "page",
          "references": [
            "Part",
            "InventoryStock"
          ],
          "rulesApplied": [
            "ruleInventoryLowStock",
            "ruleRoleAccess"
          ]
        },
        {
          "signal": "billingPage",
          "title": "Faturamento",
          "reason": "Gerar e acompanhar faturas por OS.",
          "priority": "now",
          "actor": "shopOwner",
          "artifactType": "page",
          "references": [
            "Invoice",
            "ServiceOrder"
          ],
          "rulesApplied": [
            "ruleInvoiceFromServiceOrder",
            "ruleRoleAccess"
          ]
        },
        {
          "signal": "adminDashboardPage",
          "title": "Administração do Painel",
          "reason": "Configurar indicadores exibidos no painel básico do MVP.",
          "priority": "now",
          "actor": "shopOwner",
          "artifactType": "page",
          "references": [
            "shopOwnerMetricsDashboard"
          ],
          "rulesApplied": [
            "ruleRoleAccess"
          ]
        },
        {
          "signal": "customerManagementPage",
          "title": "Cadastro de Clientes",
          "reason": "CRUD dedicado para clientes, alinhado às ações de criação/edição.",
          "priority": "now",
          "actor": "attendant",
          "artifactType": "page",
          "references": [
            "Customer"
          ],
          "rulesApplied": [
            "ruleRoleAccess"
          ]
        },
        {
          "signal": "vehicleManagementPage",
          "title": "Cadastro de Veículos",
          "reason": "CRUD dedicado para veículos com vínculo ao cliente.",
          "priority": "now",
          "actor": "attendant",
          "artifactType": "page",
          "references": [
            "Vehicle",
            "Customer"
          ],
          "rulesApplied": [
            "ruleVehicleCustomerLink",
            "ruleRoleAccess"
          ]
        }
      ],
      "workflows": [
        {
          "signal": "serviceOrderWorkflow",
          "title": "Fluxo da Ordem de Serviço",
          "reason": "OS tem status e transições até fechamento.",
          "priority": "now",
          "actor": "attendant",
          "artifactType": "workflow",
          "references": [
            "ServiceOrder",
            "ServiceOrderCommand"
          ],
          "rulesApplied": [
            "ruleServiceOrderStatus",
            "ruleServiceOrderTotal"
          ]
        },
        {
          "signal": "inventoryAlertWorkflow",
          "title": "Alerta de Estoque",
          "reason": "Alertas de peças exigem regras e acionamento automático.",
          "priority": "now",
          "actor": "shopOwner",
          "artifactType": "workflow",
          "references": [
            "InventoryAdjustmentCommand",
            "InventoryStock",
            "Part"
          ],
          "rulesApplied": [
            "ruleInventoryLowStock"
          ]
        },
        {
          "signal": "billingWorkflow",
          "title": "Fluxo de Faturamento",
          "reason": "Geração de fatura a partir da OS e controle de status.",
          "priority": "soon",
          "actor": "shopOwner",
          "artifactType": "workflow",
          "references": [
            "InvoiceCommand",
            "Invoice",
            "ServiceOrder"
          ],
          "rulesApplied": [
            "ruleInvoiceFromServiceOrder"
          ]
        },
        {
          "signal": "maintenanceForecastWorkflow",
          "title": "Geração de Manutenção Prevista",
          "reason": "Gerar e atualizar previsões de manutenção com base no histórico do veículo.",
          "priority": "soon",
          "actor": "shopOwner",
          "artifactType": "workflow",
          "references": [
            "MaintenanceForecastCommand",
            "MaintenanceForecast",
            "Vehicle",
            "ServiceOrder"
          ],
          "rulesApplied": [
            "ruleMaintenanceForecast"
          ]
        }
      ],
      "plugins": [],
      "agents": [
        {
          "signal": "repairSuggestionAgent",
          "title": "Agente de IA para reparos e tempo",
          "reason": "Requisito de IA para sugerir reparos comuns e estimar tempo de mão de obra.",
          "priority": "soon",
          "actor": "mechanic",
          "artifactType": "agent",
          "references": [
            "Vehicle",
            "ServiceOrder",
            "RepairSuggestion"
          ]
        }
      ],
      "horizontalModules": [
        {
          "signal": "i18nModule",
          "title": "Internacionalização",
          "reason": "Suporte obrigatório a pt-BR e en.",
          "priority": "now",
          "artifactType": "horizontalModule",
          "references": []
        },
        {
          "signal": "authModule",
          "title": "Autenticação e perfis",
          "reason": "Perfis de dono, atendente e mecânico com permissões distintas.",
          "priority": "now",
          "artifactType": "horizontalModule",
          "references": [
            "ruleRoleAccess"
          ]
        },
        {
          "signal": "notificationModule",
          "title": "Notificações operacionais",
          "reason": "Alertas de estoque baixo e eventos críticos de OS.",
          "priority": "soon",
          "artifactType": "horizontalModule",
          "references": [
            "inventoryAlertWorkflow"
          ]
        }
      ],
      "mdm": [
        {
          "signal": "customerMasterData",
          "title": "MDM de Cliente",
          "reason": "Entidade central para histórico e OS; precisa padronização.",
          "priority": "now",
          "artifactType": "mdm",
          "references": [
            "Customer"
          ]
        },
        {
          "signal": "vehicleMasterData",
          "title": "MDM de Veículo",
          "reason": "Veículo é o principal objeto do histórico e manutenção prevista.",
          "priority": "now",
          "artifactType": "mdm",
          "references": [
            "Vehicle"
          ]
        },
        {
          "signal": "serviceOrderMasterData",
          "title": "MDM de Ordem de Serviço",
          "reason": "OS é o núcleo do fluxo e do cálculo de custos.",
          "priority": "now",
          "artifactType": "mdm",
          "references": [
            "ServiceOrder"
          ]
        },
        {
          "signal": "partInventoryMasterData",
          "title": "MDM de Peça/Estoque",
          "reason": "Controle de peças e alertas depende de dados padronizados.",
          "priority": "now",
          "artifactType": "mdm",
          "references": [
            "Part",
            "InventoryStock"
          ]
        },
        {
          "signal": "invoiceMasterData",
          "title": "MDM de Fatura",
          "reason": "Faturamento exige registros consistentes vinculados à OS.",
          "priority": "now",
          "artifactType": "mdm",
          "references": [
            "Invoice"
          ]
        }
      ],
      "metricTables": [
        {
          "signal": "metricTableOps",
          "title": "Tabela de métricas operacionais",
          "reason": "Consolidar OS abertas, receita mensal e estoque baixo para o painel.",
          "priority": "now",
          "artifactType": "metricTable",
          "references": [
            "ServiceOrder",
            "Invoice",
            "InventoryStock"
          ]
        },
        {
          "signal": "openServiceOrdersMetric",
          "title": "Métrica de OS abertas",
          "reason": "Indicador de volume atual de ordens abertas no painel.",
          "priority": "now",
          "artifactType": "metric",
          "references": [
            "metricTableOps"
          ]
        },
        {
          "signal": "monthlyRevenueMetric",
          "title": "Métrica de receita mensal",
          "reason": "Indicador de receita consolidada no mês no painel.",
          "priority": "now",
          "artifactType": "metric",
          "references": [
            "metricTableOps"
          ]
        },
        {
          "signal": "upcomingMaintenanceMetric",
          "title": "Métrica de manutenção prevista",
          "reason": "Indicador de veículos com manutenção prevista.",
          "priority": "now",
          "artifactType": "metric",
          "references": [
            "MaintenanceForecast",
            "metricTableOps"
          ]
        },
        {
          "signal": "inventoryLowStockMetric",
          "title": "Métrica de estoque baixo",
          "reason": "Indicador de itens abaixo do mínimo.",
          "priority": "now",
          "artifactType": "metric",
          "references": [
            "InventoryStock",
            "metricTableOps"
          ]
        }
      ],
      "metricDashboards": [
        {
          "signal": "shopOwnerMetricsDashboard",
          "title": "Dashboard de métricas do dono da oficina",
          "reason": "Painel básico do MVP com indicadores principais.",
          "priority": "now",
          "actor": "shopOwner",
          "artifactType": "metricDashboard",
          "references": [
            "metricTableOps",
            "openServiceOrdersMetric",
            "monthlyRevenueMetric",
            "upcomingMaintenanceMetric",
            "inventoryLowStockMetric"
          ]
        }
      ],
      "usecaseEntities": [
        {
          "signal": "serviceOrderUsecaseEntities",
          "title": "Entidades de caso de uso da OS",
          "reason": "Operações de criação/atualização de OS, itens e total.",
          "priority": "now",
          "artifactType": "usecaseEntity",
          "references": [
            "ServiceOrderCommand",
            "LaborItem",
            "Part",
            "ServiceOrder"
          ]
        },
        {
          "signal": "inventoryAdjustUsecaseEntities",
          "title": "Entidades de caso de uso de estoque",
          "reason": "Ajuste de estoque e disparo de alertas.",
          "priority": "now",
          "artifactType": "usecaseEntity",
          "references": [
            "InventoryAdjustmentCommand",
            "InventoryStock"
          ]
        },
        {
          "signal": "invoiceUsecaseEntities",
          "title": "Entidades de caso de uso de fatura",
          "reason": "Geração e atualização de faturas vinculadas à OS.",
          "priority": "now",
          "artifactType": "usecaseEntity",
          "references": [
            "InvoiceCommand",
            "Invoice",
            "ServiceOrder"
          ]
        },
        {
          "signal": "maintenanceForecastUsecaseEntities",
          "title": "Entidades de caso de uso de manutenção prevista",
          "reason": "Geração e atualização de previsões de manutenção.",
          "priority": "soon",
          "artifactType": "usecaseEntity",
          "references": [
            "MaintenanceForecastCommand",
            "MaintenanceForecast",
            "Vehicle",
            "ServiceOrder"
          ]
        }
      ]
    },
    "decisions": [
      {
        "decisionId": "decisionMdmCustomer",
        "title": "MDM de Cliente",
        "decision": "Aceito",
        "reason": "Cliente é entidade central para histórico e faturamento; padronização é obrigatória.",
        "affectedArtifacts": [
          "customerMasterData"
        ]
      },
      {
        "decisionId": "decisionMdmVehicle",
        "title": "MDM de Veículo",
        "decision": "Aceito",
        "reason": "Veículo é o núcleo do histórico e manutenção prevista.",
        "affectedArtifacts": [
          "vehicleMasterData"
        ]
      },
      {
        "decisionId": "decisionMdmServiceOrder",
        "title": "MDM de Ordem de Serviço",
        "decision": "Aceito",
        "reason": "Fluxo rápido de OS e custo preciso dependem da OS bem definida.",
        "affectedArtifacts": [
          "serviceOrderMasterData"
        ]
      },
      {
        "decisionId": "decisionMdmPartInventory",
        "title": "MDM de Peça/Estoque",
        "decision": "Aceito",
        "reason": "Controle de peças com alertas requer estrutura consistente.",
        "affectedArtifacts": [
          "partInventoryMasterData"
        ]
      },
      {
        "decisionId": "decisionMdmInvoice",
        "title": "MDM de Fatura",
        "decision": "Aceito",
        "reason": "Faturamento é requisito do MVP.",
        "affectedArtifacts": [
          "invoiceMasterData"
        ]
      },
      {
        "decisionId": "decisionUsecaseServiceOrderOps",
        "title": "Entidades de caso de uso da OS",
        "decision": "Aceito",
        "reason": "Há operações de escrita e atualização de custos e status.",
        "affectedArtifacts": [
          "serviceOrderUsecaseEntities"
        ]
      },
      {
        "decisionId": "decisionUsecaseInventoryAdjust",
        "title": "Entidades de caso de uso de estoque",
        "decision": "Aceito",
        "reason": "Controle de peças com alertas exige comandos e sinais de backend.",
        "affectedArtifacts": [
          "inventoryAdjustUsecaseEntities"
        ]
      },
      {
        "decisionId": "decisionWorkflowServiceOrder",
        "title": "Workflow de Ordem de Serviço",
        "decision": "Aceito",
        "reason": "OS tem ciclo de vida e transições claras.",
        "affectedArtifacts": [
          "serviceOrderWorkflow"
        ]
      },
      {
        "decisionId": "decisionWorkflowInventoryAlert",
        "title": "Workflow de Alerta de Estoque",
        "decision": "Aceito",
        "reason": "Alertas são prioridade do MVP.",
        "affectedArtifacts": [
          "inventoryAlertWorkflow"
        ]
      },
      {
        "decisionId": "decisionWorkflowBilling",
        "title": "Workflow de Faturamento",
        "decision": "Aceito",
        "reason": "Faturamento é necessário e depende do escopo fiscal.",
        "affectedArtifacts": [
          "billingWorkflow"
        ]
      },
      {
        "decisionId": "decisionPageDashboard",
        "title": "Dashboard operacional",
        "decision": "Aceito",
        "reason": "Painel básico foi aceito para o MVP.",
        "affectedArtifacts": [
          "dashboardPage",
          "shopOwnerMetricsDashboard"
        ]
      },
      {
        "decisionId": "decisionPageVehicleHistory",
        "title": "Histórico de Veículo e Cliente",
        "decision": "Aceito",
        "reason": "Histórico é foco central do produto.",
        "affectedArtifacts": [
          "vehicleHistoryPage"
        ]
      },
      {
        "decisionId": "decisionPageServiceOrderList",
        "title": "Lista de Ordens de Serviço",
        "decision": "Aceito",
        "reason": "Fluxo rápido de OS é requisito.",
        "affectedArtifacts": [
          "serviceOrderListPage"
        ]
      },
      {
        "decisionId": "decisionPageServiceOrderDetail",
        "title": "Detalhe da Ordem de Serviço",
        "decision": "Aceito",
        "reason": "Execução de serviços e cálculo de custos precisam de interface dedicada.",
        "affectedArtifacts": [
          "serviceOrderDetailPage"
        ]
      },
      {
        "decisionId": "decisionPagePartsInventory",
        "title": "Controle de Peças/Estoque",
        "decision": "Aceito",
        "reason": "Prioridade declarada para controle de peças com alertas.",
        "affectedArtifacts": [
          "partsInventoryPage"
        ]
      },
      {
        "decisionId": "decisionPageBilling",
        "title": "Faturamento",
        "decision": "Aceito",
        "reason": "Faturamento é parte das telas-chave.",
        "affectedArtifacts": [
          "billingPage"
        ]
      },
      {
        "decisionId": "decisionAgentRepairSuggestion",
        "title": "Agente de IA para sugestões de reparos e tempo",
        "decision": "Aceito",
        "reason": "Funcionalidade de IA é desejada após o núcleo operacional.",
        "affectedArtifacts": [
          "repairSuggestionAgent"
        ]
      },
      {
        "decisionId": "decisionHorizontalI18n",
        "title": "Internacionalização",
        "decision": "Aceito",
        "reason": "Bilíngue é requisito explícito.",
        "affectedArtifacts": [
          "i18nModule"
        ]
      },
      {
        "decisionId": "decisionHorizontalAuth",
        "title": "Autenticação e perfis",
        "decision": "Aceito",
        "reason": "Papéis foram definidos e exigem controle de acesso.",
        "affectedArtifacts": [
          "authModule"
        ]
      },
      {
        "decisionId": "decisionNotificationInventory",
        "title": "Notificações operacionais",
        "decision": "Aceito",
        "reason": "Alertas requerem comunicação operacional consistente.",
        "affectedArtifacts": [
          "notificationModule"
        ]
      },
      {
        "decisionId": "decisionMetricTableOps",
        "title": "Tabela de métricas operacionais",
        "decision": "Aceito",
        "reason": "Painel básico do MVP requer métricas consolidadas.",
        "affectedArtifacts": [
          "metricTableOps"
        ]
      },
      {
        "decisionId": "decisionShopOwnerDashboardMetrics",
        "title": "Dashboard de métricas do dono da oficina",
        "decision": "Aceito",
        "reason": "MVP inclui painel básico com indicadores principais.",
        "affectedArtifacts": [
          "shopOwnerMetricsDashboard"
        ]
      }
    ],
    "deferredItems": []
  }
} as const;

export default modulePlan;
