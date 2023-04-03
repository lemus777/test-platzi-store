import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {
    test('Render del componente Header', () => {
        const header = shallow( // shallow --> Solo necesitas algo particular del componente. No ocupas todo el DOM
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.length).toEqual(1);
    });
    test('Render del título', () => {
        const header = mount( // mount --> Cuando necesitas el DOM
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.find('.Header-title').text()).toEqual('Platzi Store');
    });
});

describe('Header Snapshot', () => {
    test('Comprobar el Snapshot de Header', () => {
        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
});