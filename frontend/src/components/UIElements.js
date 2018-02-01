import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';

export const ULink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

export const HoldingGrid = styled(Grid)`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
