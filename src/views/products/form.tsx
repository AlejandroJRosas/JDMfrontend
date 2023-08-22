import { Formik, FormikHelpers } from 'formik'
import { FunctionComponent } from 'react'
import * as Yup from 'yup'
// material-ui
import styled from 'styled-components'
import MainCard from 'components/cards/MainCard'
// import SelectField from 'components/SelectField'
import {
  Button,
  FormControl,
  // FormControlLabel,
  FormHelperText,
  TextField
  // Checkbox
} from '@mui/material'

// const USE_AUTOCOMPLETE = false

const Form: FunctionComponent<Props> = ({
  className,
  title,
  onSubmit,
  initialValues,
  isCreate
}) => {
  return (
    <div className={className}>
      <Formik
        initialValues={initialValues}
        validateOnChange={true}
        validateOnBlur={false}
        validateOnMount={false}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(255).required('El nombre es requerido'),
          price: Yup.number()
            .typeError('El precio es invalido')
            .required('El precio es requerido')
        })}
        onSubmit={onSubmit as any}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <MainCard className={'form-data'} title={title}>
              <FormControl className='field-form' fullWidth>
                <TextField
                  id='name'
                  label='Nombre del producto'
                  variant='outlined'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  helperText={touched.name ? errors.name : ''}
                  error={touched.name && !!errors.name}
                  name='name'
                />
              </FormControl>
              <FormControl className='field-form' fullWidth>
                <TextField
                  id='price'
                  label='Precio'
                  variant='outlined'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.price}
                  helperText={touched.price ? errors.price : ''}
                  error={touched.price && !!errors.price}
                  name='price'
                />
              </FormControl>
              {/* <FormControlLabel
                control={
                  <Checkbox
                    checked={values.isEcological}
                    onChange={handleChange}
                    name='isEcological'
                    color='primary'
                  />
                }
                name='isEcological'
                label='Ecologico'
              /> */}
            </MainCard>
            <MainCard className={'form-data flex-column'}>
              {errors.submit && (
                <FormHelperText error>{errors.submit}</FormHelperText>
              )}
              <Button variant='outlined' type='submit' color='primary'>
                Guardar
              </Button>
            </MainCard>
          </form>
        )}
      </Formik>
    </div>
  )
}

interface Props {
  className?: string
  onSubmit: OnSubmit
  title: string
  initialValues: FormValues
  isCreate?: boolean
}

export type FormValues = {
  productId?: number
  name: string
  price: number
  submit: string | null
}

export type OnSubmit = (
  values: FormValues,
  helpers: FormikHelpers<FormValues>
) => void | Promise<any>

export default styled(Form)`
  display: flex;
  flex-direction: column;

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .field-form {
    margin: 6px 0px;
  }

  .form-data {
    margin-top: 16px;
  }

  .form-header-card {
    width: 100%;
  }

  .form-header {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`
