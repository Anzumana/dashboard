import selectCity from './reducers/selectCity'

describe('Todo Reducer', ()=> {
	test('returns a state object' , () => {
		const result = selectedCity(undefined , {type:'Anything'})
		expect(result).toBeDefined()
	 })
})
