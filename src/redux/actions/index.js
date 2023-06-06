export const SELECCIONAR_PLAN = 'SELECCIONAR_PLAN';
export const COMPLETAR_INFORMACION = 'COMPLETAR_INFORMACION';
export const COMPLETAR_PAGO = 'COMPLETAR_PAGO';

export const seleccionarPlan = (plan) => {
  return {
    type: SELECCIONAR_PLAN,
    payload: plan
  };
};

export const completarInformacion = (datosUsuario) => {
  return {
    type: COMPLETAR_INFORMACION,
    payload: datosUsuario
  };
};

export const completarPago = (datosPago) => {
  return {
    type: COMPLETAR_PAGO,
    payload: datosPago
  };
};
