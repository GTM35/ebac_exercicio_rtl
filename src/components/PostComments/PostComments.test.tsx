import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve realizar a inserção de dois comentários", () => {
    render(<PostComment />);
    const botao = screen.getByTestId("btn-comentar");
    const campoComentario = screen.getByTestId("campo-comentario");

    /* Comentário 1 */
    fireEvent.change(campoComentario, {
      target: { value: "Primeiro comentário" },
    });
    fireEvent.click(botao); // Click no botão

    /* Comentário 2 */
    fireEvent.change(campoComentario, {
      target: { value: "Segundo comentário" },
    });
    fireEvent.click(botao); //Click no botão
  });
});
