import Cards from '../../Componentes/Cards';

function Quadrosbranco() {
    return (
        <>
            <main className=" d-flex flex-column align-items-center">
                <section ClassName="section1">
                    <div className="">
                        <div className=" d-flex align-items-center">
                            <img
                                src="assets/a2.png"
                                className="w-25 h-25 mx-auto"
                                alt="Cinque Terre"
                            ></img>
                        </div>

                        <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-10'>
                                <h3 className="ms-2">Aqui, sua barbearia alcança um novo patamar de organização e eficiência. Nossa plataforma foi desenvolvida especialmente para gerenciar todos os aspectos do seu negócio, desde o agendamento de clientes até o controle financeiro e estoque.
                                    Com um sistema simples, moderno e intuitivo, você tem mais tempo para focar no que realmente importa: oferecer uma experiência incrível para seus clientes. Transforme a gestão da sua barbearia em algo prático e eficiente, e veja seu negócio crescer

                                </h3>
                            </div>
                            <div className='col-1'></div>
                        </div>

                    </div>
                </section>


            </main>
        </>

    )

}
export default Quadrosbranco;