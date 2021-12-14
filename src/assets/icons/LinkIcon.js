import styled from "styled-components";

const Svg = styled.svg`
width: 24px;
height:24px;
margin-bottom:-5px ;
`
const Path = styled.path`
stroke-width: 100px;
`
const LinkIcon = () => {

    return (
        <Svg version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g>
                <Path d="m113.75 33.613c-5.7734 0.54297-10.176 5.4023-10.148 11.199v470.39c0 6.1875 5.0117 11.199 11.199 11.199h470.4c6.1875 0 11.199-5.0117 11.199-11.199v-235.2 0.003906c0.042968-3-1.1172-5.8906-3.2227-8.0234-2.1055-2.1367-4.9766-3.3359-7.9766-3.3359-2.9961 0-5.8711 1.1992-7.9766 3.3359-2.1055 2.1328-3.2656 5.0234-3.2227 8.0234v224h-448v-447.99h224v-0.003906c2.9961 0.042969 5.8867-1.1172 8.0234-3.2227 2.1328-2.1055 3.3359-4.9805 3.3359-7.9766 0-3-1.2031-5.8711-3.3359-7.9766-2.1367-2.1055-5.0273-3.2656-8.0234-3.2227h-235.2c-0.35156-0.015625-0.69922-0.015625-1.0508 0zm324.8 0c-2.9727 0.13672-5.7656 1.4492-7.7695 3.6484s-3.0508 5.1055-2.9102 8.0742c0.14062 2.9727 1.4531 5.7656 3.6523 7.7695 2.1992 2 5.1055 3.0469 8.0781 2.9062h118.65l-249.73 249.72c-2.4727 1.9961-3.9844 4.9492-4.1562 8.1211-0.16797 3.1758 1.0156 6.2734 3.2656 8.5195 2.2461 2.25 5.3438 3.4375 8.5195 3.2656 3.1758-0.17188 6.1289-1.6797 8.1211-4.1562l249.73-249.72v118.65c-0.042969 2.9961 1.1172 5.8867 3.2227 8.0195 2.1055 2.1367 4.9805 3.3398 7.9766 3.3398 3 0 5.8711-1.2031 7.9766-3.3398 2.1055-2.1328 3.2656-5.0234 3.2227-8.0195v-145.6c0-6.1875-5.0117-11.199-11.199-11.199h-145.6 0.003906c-0.35156-0.015625-0.70312-0.015625-1.0508 0z" />
            </g>
        </Svg>
    )
}
export default LinkIcon;