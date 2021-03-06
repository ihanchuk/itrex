import io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

class socket {
	constructor(ENDPOINTS) {
        this.connection = io(ENDPOINTS.socketPath);
    }
	
	getConnection(nameSpace) {
		return this.connection;
	}

	on(eventName, callback) {
		let observer = this.createHandler(eventName);
		observer.subscribe(data => {
			callback(data);
		});

		return observer;
	}

	createHandler(eventName) {
		let observable = new Observable( observer => {
			this.connection.on(eventName, data => {
				observer.next(data);
			});
			return () => {
				this.connection.disconnect();
			}
		})

		return observable;
	}

	emit(eventName, data) {
		this.connection.emit(eventName, data);
	}
}

socket.$inject=['ENDPOINTS'];

export default socket;