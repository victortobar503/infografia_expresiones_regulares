# Validación con Expresiones Regulares en JavaScript

Este proyecto es un sitio web sencillo que demuestra cómo utilizar **expresiones regulares (Regex)** en JavaScript para validar datos en un formulario.

## 🚀 Características
- Validación de **correo electrónico** (formato estándar).
- Validación de **número de teléfono salvadoreño** en formato `2222-2222`.
- Validación de **contraseña segura** (mínimo 8 caracteres, al menos una letra, un número y un símbolo).
- Mensajes dinámicos ✔ válido / ❌ inválido con colores y animación.

## 📂 Estructura del proyecto

/css
expresionesRegulares.css -> Estilos de la página
/js
expresionesRegulares.js -> Lógica de validación con Regex


## 🛠️ Tecnologías utilizadas
- **HTML5** para la estructura
- **CSS3** para estilos y diseño responsivo
- **JavaScript** para validaciones con expresiones regulares

## 📖 Explicación técnica
- **Email Regex**: `^\S+@\S+\.\S+$`  
  Verifica que el correo tenga un formato válido (`usuario@dominio.com`).

- **Teléfono Regex**: `^\d{4}-\d{4}$`  
  Asegura el formato salvadoreño con 8 dígitos separados por guion (`2222-2222`).

- **Contraseña Regex**: `^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$`  
  Garantiza que la clave tenga al menos una letra, un número y un símbolo.





