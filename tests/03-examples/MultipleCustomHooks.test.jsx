import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks/> );

        expect( screen.getByText('Películas') );
        expect( screen.getByText('Cargando...') );

        const prevButton = screen.getByRole('button', { name: 'Película Anterior'});
        expect(prevButton.disabled).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Película Siguiente'});
        expect(nextButton.disabled).toBeTruthy();

    });

    test('Debe mostrar una película', () => {

        useFetch.mockReturnValue({
            data: { title: 'El Club de la pelea', overview: 'Descripción de la película', poster_path: 'imagen.jpg' },
            isLoading: false,
            hasError: null
        });
        
        render( <MultipleCustomHooks/> );
        
        expect( screen.getByText('El Club de la pelea') ).toBeTruthy();
        expect( screen.getByText('Descripción de la película') ).toBeTruthy();

        const prevButton = screen.getByRole('button', { name: 'Película Anterior'});
        expect(prevButton.disabled).toBeFalsy();

        const nextButton = screen.getByRole('button', { name: 'Película Siguiente'});
        expect(nextButton.disabled).toBeFalsy();
        
    });

    test('Debe llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: { title: 'El Club de la pelea', overview: 'Descripción de la película', poster_path: 'imagen.jpg' },
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks/> );

        const nextButton = screen.getByRole('button', { name: 'Película Siguiente'});
        fireEvent.click(nextButton);

        expect( mockIncrement ).toHaveBeenCalled();
        
    });

});

