import {
  IconCreditCard, 
  IconReportMoney, 
  IconReplace
} from '@tabler/icons';
import { MenuItem, MenuItemType } from './types';

const other: MenuItem = {
  id: 'agencies-crud-category-general',
  type: MenuItemType.Group,
  title: 'General',
  children: [
    {
      id: "wallets",
      title: "Billeteras",
      type: MenuItemType.Collapse,
      icon: IconCreditCard,
      breadcrumbs: false,
      children: [
        {
          id: "list-admin",
          title: "Lista de Billeteras",
          type: MenuItemType.Item,
          url: "/general/wallets",
          breadcrumbs: false,
        },
        {
          id: "create-admin",
          title: "Crear Billetera",
          type: MenuItemType.Item,
          url: "/general/wallets/create",
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "movements",
      title: "Movimientos Internos",
      type: MenuItemType.Collapse,
      icon: IconReportMoney,
      breadcrumbs: false,
      children: [
        {
          id: "list-admin",
          title: "Lista de Movimientos",
          type: MenuItemType.Item,
          url: "/general/movements",
          breadcrumbs: false,
        },
        {
          id: "create-admin",
          title: "Crear Movimiento",
          type: MenuItemType.Item,
          url: "/general/movements/create",
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "swaps",
      title: "Cambios",
      type: MenuItemType.Collapse,
      icon: IconReplace,
      breadcrumbs: false,
      children: [
        {
          id: "list-admin",
          title: "Lista de Cambios",
          type: MenuItemType.Item,
          url: "/general/swaps",
          breadcrumbs: false,
        },
        {
          id: "create-admin",
          title: "Crear Cambio",
          type: MenuItemType.Item,
          url: "/general/swaps/create",
          breadcrumbs: false,
        },
      ],
    }
  ]
};

export default other;
