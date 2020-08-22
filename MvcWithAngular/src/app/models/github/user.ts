export class User {

	constructor(
		public name: string,
		public id: number,
		public type: string,
		public url: string,
		public created_at: Date,
		public updated_at: Date
	) { }
	
}
