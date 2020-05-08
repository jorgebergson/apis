# Identificador de solicitud opcional

## Campo de encabezado de solicitud (X-Request-Tag)

Este campo es opcional cuando se utilizan llamadas API y sirve como un identificador de solicitud. Si una empresa necesita, por ejemplo, agrupar el número de solicitudes realizadas por cada departamento, puede usar este campo para identificar en la facturación el número de solicitudes para cada elemento del grupo.

El campo es texto libre (cadena de hasta 32 caracteres) y no tiene validación de su contenido. Por lo tanto, corresponde al cliente realizar un seguimiento de la información que se envía a este campo para que el informe de facturación realice la agrupación adecuada.

Este atributo puede ser utilizado por la entidad de clase y / o grupo económico en la modalidad global, con un cargo de entidad con el propósito de identificar al asociado que realiza la solicitud. En el caso de entidades de clase o grupos económicos que llevan a cabo el contrato a un costo para el miembro, no es necesario llevar a cabo la agrupación, ya que cada miembro tendrá su propia clave de consumo.