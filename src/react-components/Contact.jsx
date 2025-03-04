import React, { useState } from "react";
import { Input, Button, Textarea } from "@nextui-org/react";

// Función para validar el correo electrónico
const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};
// Función para validar el número de teléfono
const validatePhoneNumber = (phoneNumber) => {
  return /3[0-9]{9}/gm.test(phoneNumber);
};

export default function App() {
  // Estado para almacenar los valores de los campos de entrada y textarea
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  // Validación de correo electrónico
  const isInvalidEmail = React.useMemo(() => {
    if (formData.correo === "") return false;
    return validateEmail(formData.correo) ? false : true;
  }, [formData.correo]);
  // Validación de telefono
  const isInvalidPhone = React.useMemo(() => {
    if (formData.telefono === "") return false;
    return validatePhoneNumber(formData.telefono) ? false : true;
  }, [formData.telefono]);

  // Función para manejar el cambio en los campos de entrada
  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "573163030118"; // El número de teléfono de WhatsApp en formato internacional


    // Construir el mensaje predeterminado
    const message = `¡Hola! Softwow soy ${formData.nombre} estos son mis datos de contacto de contacto: Telefono:${formData.telefono}, Correo: ${formData.correo}, mensaje: ${formData.mensaje}.`;

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);

    // Crear el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;

    // Abrir WhatsApp con el enlace
    window.open(whatsappLink, "_blank");

    console.log("Valores del formulario:", formData);
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",
    });

  };

  return (
    <form
      className="w-full flex flex-col md:grid md:grid-cols-2 gap-4 md:w-1/2 pt-16"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-4">
        <Input
          classNames={{
            innerWrapper: "bg-white ",
            inputWrapper: "bg-white ",
            mainWrapper: "bg-white",
          }}
          color="primary"
          variant="bordered"
          isRequired
          label="Nombre"
          placeholder="Ingresa tu nombre"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={(e) => handleChange(e, "nombre")}
        />
        <Input
          classNames={{
            innerWrapper: "bg-white ",
            inputWrapper: "bg-white ",
            mainWrapper: "bg-white",
          }}
          color={isInvalidEmail ? "danger" : "primary"}
          variant="bordered"
          isRequired
          label="Correo Electrónico"
          placeholder="Ingresa tu correo"
          type="email"
          name="correo"
          isInvalid={isInvalidEmail}
          errorMessage={isInvalidEmail && "Por favor ingresa un correo válido"}
          value={formData.correo}
          onChange={(e) => handleChange(e, "correo")}
        />
        <Input
          classNames={{
            innerWrapper: "bg-white ",
            inputWrapper: "bg-white ",
            mainWrapper: "bg-white",
          }}
          color={isInvalidPhone ? "danger" : "primary"}
          variant="bordered"
          isRequired
          label="Teléfono"
          placeholder="Ingresa tu número de teléfono"
          type="text"
          name="telefono"
          isInvalid={isInvalidPhone}
          errorMessage={
            isInvalidPhone &&
            "Por favor ingresa un número de teléfono válido (comenzando con 3 y con 12 números)"
          }
          value={formData.telefono}
          onChange={(e) => handleChange(e, "telefono")}
        />
      </div>
      <Textarea
        classNames={{
          innerWrapper: "bg-white",
          inputWrapper: "bg-white ",
          mainWrapper: "bg-white",
        }}
        variant="bordered"
        color="primary"
        className="flex-row"
        isRequired
        label="Mensaje"
        placeholder="Ingresa tu mensaje"
        type="textarea"
        name="mensaje"
        value={formData.mensaje}
        onChange={(e) => handleChange(e, "mensaje")}
      />
      <div className="col-span-2 mx-auto pt-2">
        <Button className="px-32 bg-[#03a9f4]" type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
}
