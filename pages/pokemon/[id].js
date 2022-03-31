import styled from "@emotion/styled";
import {
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { withRouter } from "next/router";


const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;

export async function getServerSideProps(context) {
    const allPokemon = await (
      await fetch("http://localhost:3000/pokemon.json")
    ).json();

    const pokemon = allPokemon.find(
        ({ id }) => id.toString() === context.query.id
      );
    return {
      props: {
        pokemon,
      }, // will be passed to the page component as props
    };
  }

export default withRouter(({ pokemon }) => {
  return (
    <PageContainer>
      <CssBaseline />
      {pokemon && (
        <div>
          <h1>{pokemon.name.english}</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Attribute</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(pokemon.base).map((key) => (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{pokemon.base[key]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </PageContainer>
  );
});
