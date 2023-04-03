import 'jsdom-global/register'
import React from "react";
import { mount } from "enzyme";
import Footer from "../../components/Footer";

// El test no soporta style, por eso hemos creado __mocks__/styleMock.js
// Revisar el packaje.json porque en jest hemos configurado varias cosas
// para que mount funcione hay que tener jsdom
// jsdom no funciona de primeras, hay que instalar de este modo: npm install --save-dev --save-exact jsdom jsdom-global
// el import a jsdom-global/register tiene que ser lo primero, antes que React
describe('<Footer />', () => {
    const footer = mount(<Footer />);
    
    test('Render del componente Footer', () => {
        expect(footer.length).toEqual(1);
    });
    test('Render del título', () => {
        expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
    });
});