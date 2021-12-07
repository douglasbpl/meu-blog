import React from 'react';
import { Link } from 'gatsby'
import Campeao from "../../images/curiosidades/torneio.jpg"
import Torta from "../../images/curiosidades/torta.jpg"
import * as S from './styled'

export function Curiosidades() {
    return (
        <div>
            <S.ContainerMenuFixed>
                <S.MenuFixedPM>
                    <S.List>
                        <Link to="/" style={{ color: "white", textDecoration: "none" }}><S.ListItem>Home</S.ListItem></Link>
                        <Link to="/prj" style={{ color: "white", textDecoration: "none" }} ><S.ListItem>Projetos</S.ListItem></Link>
                    </S.List>
                </S.MenuFixedPM>
            </S.ContainerMenuFixed>

            
            <S.ContainerSection>
                <S.TittleSecoSection >Curi<S.SpUloax>osidades</S.SpUloax> </S.TittleSecoSection>
                <S.IntoSectionleft>
                    <figure><img src={Torta} alt="Foto da minha Torta de Frango" /></figure>
                    <div>
                        <h2>Cozinhar</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <button>Ver mais</button>
                    </div>
                </S.IntoSectionleft>

                <S.IntoSectionRight>

                    <div>
                        <h2>Jogos</h2>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <button>Ver mais</button>
                    </div>
                    <figure><img src={Campeao} alt="Foto Vencendo um torneio" /></figure>
                </S.IntoSectionRight>

                <S.IntoSectionleft>
                    <figure><img src={Campeao} alt="Merito escolar" /></figure>
                    <div>
                        <h2>Aluno Modelo da Prefeitura</h2>
                        <p>TLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <button>Ver mais</button>
                    </div>
                </S.IntoSectionleft>

            </S.ContainerSection>

        </div>
    );
}