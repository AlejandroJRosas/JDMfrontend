import { FunctionComponent } from 'react'
// material-ui
import styled from 'styled-components'
import DynamicTable, { Header } from 'components/DynamicTable'
import { IconButton } from '@mui/material'
import { IconEdit, IconTrash } from '@tabler/icons'
import { LocalOrderActivity } from './types'

const OrderProductsList: FunctionComponent<Props> = ({
  className,
  items,
  orderId,
  onEdit,
  onDelete,
  isParentUpdate
}) => {
  const columnForParentId: Header<any>[] = []
  if (orderId !== null && isParentUpdate) {
    columnForParentId.push({
      columnLabel: 'Orden',
      cellAlignment: 'left',
      onRender: (_: LocalOrderActivity) => orderId
    })
  }

  return (
    <>
      <DynamicTable
        className={className}
        emptyState={
          <center className={'full-empty-state'}>
            <p>No hay productos agregados</p>
          </center>
        }
        headers={[
          ...columnForParentId,
          {
            columnLabel: 'ID',
            fieldName: 'productId',
            cellAlignment: 'left'
          },
          {
            columnLabel: 'Producto',
            fieldName: 'name',
            cellAlignment: 'left'
          },
          {
            columnLabel: 'Precio de Venta',
            fieldName: 'price',
            cellAlignment: 'left'
          },
          {
            columnLabel: 'Cantidad',
            fieldName: 'quantity',
            cellAlignment: 'left'
          }
        ]}
        rows={items}
        components={[
          (row: LocalOrderActivity, index: number) => (
            <IconButton
              key={`order-products-${index}-update`}
              color='primary'
              onClick={() => {
                onEdit(row, index)
              }}
            >
              <IconEdit />
            </IconButton>
          ),
          (row: LocalOrderActivity, index: number) => (
            <IconButton
              key={`order-products-${index}-delete`}
              color='secondary'
              onClick={() => {
                onDelete(row, index)
              }}
            >
              <IconTrash />
            </IconButton>
          )
        ]}
      />
    </>
  )
}

interface Props {
  orderId?: number | null
  className?: string
  isParentUpdate?: boolean
  items: LocalOrderActivity[]
  onEdit: (item: LocalOrderActivity, index: number) => void
  onDelete: (item: LocalOrderActivity, index: number) => void
}

export default styled(OrderProductsList)`
  tr.disabled {
    opacity: 0.7;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: #e9e9e9;
    cursor: not-allowed;
  }

  .full-empty-state {
    width: 100%;
  }
`
