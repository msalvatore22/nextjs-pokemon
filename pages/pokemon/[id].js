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
import store from "../../src/store";
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;

export default withRouter(({ router }) => {
  const pokemon = store.pokemon.find(
    ({ id }) => id.toString() === router.query.id
  );
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
