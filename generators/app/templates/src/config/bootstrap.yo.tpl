import {ReducerCombiner} from '../utils/reducer/reducer.combiner';
import {RouteCombiner} from '../utils/router/route.combiner';

<% if(starterData) { %>
import DashboardReducerProvider from '../containers/dashboard/providers/reducer.provider';
import DashboardRouteProvider from '../containers/dashboard/providers/route.provider';
<% } %>

export const mainConfig = () => {
    return {
        apiUrl: `http://example.com/api`
    }
}

export const registerReducers = () => {
    <% if(starterData) { %>
    ReducerCombiner.registerReducerProvider(DashboardReducerProvider);
    <% } %>
}

export const registerRoutes = () => {
    <% if(starterData) { %>
    RouteCombiner.registerRouteProvider(DashboardRouteProvider);
    <% } %>
}
