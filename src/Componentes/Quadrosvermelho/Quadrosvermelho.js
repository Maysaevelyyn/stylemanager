import Cards from '../../Componentes/Cards';

function Quadrosvermelho() {
    return (
        <>
            <main className=" d-flex flex-column align-items-center">
                <section className="section2 bg-danger d-flex align-items-center">
                    <div className="container d-flex align-items-center">
                        <div className="w-50 d-flex justify-content-center">
                            <img
                                alt=""
                                className="w-75"
                                src="/assets/brand-horab-white.png"
                            ></img>
                        </div>
                        <div>
                            <h1 className="fw-bolder text-white">Selecione seu plano</h1>
                            <div className="d-flex">
                                <div className="w-50 mx-2 d-flex flex-column gap-3">
                                    <Cards
                                        bgColor={'#12273D'}
                                        title={'Titutlo'}
                                        text1={'corpo do card'}
                                        text2={'corpo do card'}
                                        text3={'corpo do card'}
                                        text4={'corpo do card'}
                                        text5={'corpo do card'}
                                    ></Cards>
                                    <Cards
                                        bgColor={'#D9AC59'}
                                        title={'Titutlo'}
                                        text1={'corpo do card'}
                                        text2={'corpo do card'}
                                        text3={'corpo do card'}
                                        text4={'corpo do card'}
                                        text5={'corpo do card'}
                                    ></Cards>
                                </div>
                                <div className="w-50 mx-2 d-flex flex-column gap-3">
                                    <Cards
                                        bgColor={'#F46161'}
                                        title={'Titutlo'}
                                        text1={'corpo do card'}
                                        text2={'corpo do card'}
                                        text3={'corpo do card'}
                                        text4={'corpo do card'}
                                        text5={'corpo do card'}
                                    ></Cards>
                                    <Cards
                                        bgColor={'#0CC79A'}
                                        title={'Titutlo'}
                                        text1={'corpo do card'}
                                        text2={'corpo do card'}
                                        text3={'corpo do card'}
                                        text4={'corpo do card'}
                                        text5={'corpo do card'}
                                    ></Cards>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




            </main>
        </>

    )

}
export default Quadrosvermelho;