
const Paciente = () => {
  return  (
      //m-3 bg-white shadow-md md:h-screen py-10 px-5 rounded-xl
        <div className="m-3 bg-white shadow-md  rounded-lg py-10 px-5 mb-3">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
                <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
                <span className="font-normal normal-case">Miguel</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {' '}
                <span className="font-normal normal-case">19 de Enero de 2022</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam neque natus veniam rerum voluptas! Natus modi quisquam fugiat, atque fugit accusantium tempore cupiditate mollitia voluptates! Atque harum iure quia tempore?</span>
            </p>
  

        </div>
    );
};

export default Paciente;
