import {ServiceRegistry} from 'sg-service-registry';

import {ApiProvider} from './services/ApiProvider';
import {CurrentSongChangesListener, QueueChangesListener} from './services/websocketListeners';
import jQuery from 'jquery';


function registerServices(sr) {
    sr.register('jQuery', _ => jQuery);
    sr.register("apiProvider", (sr) => new ApiProvider(sr.get("jQuery")));
    sr.register("queueChangesListener", (sr) => new QueueChangesListener());
    sr.register("currentSongChangesListener", (sr) => new CurrentSongChangesListener());

}

export const serviceRegistry = new ServiceRegistry();
registerServices(serviceRegistry);
