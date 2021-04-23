{
	"info": {
		"_postman_id": "aec36eca-6e57-4858-8dfd-ebfe3328ce34",
		"name": "Data Werehouse",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Auth",
			"item": [
				{
					"name": "/v1/api/auth/register",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name_user\": \"Juan José\",\n    \"lastname_user\": \"López Herrera\",\n    \"password_user\": \"123456\",\n    \"email_user\": \"juan@gmail.com\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/auth/register",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"auth",
								"register"
							]
						}
					},
					"response": []
				},
				{
					"name": "v1/api/auth/login",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"email_user\": \"juan@gmail.com\",\n    \"password_user\": \"123456\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/auth/login",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"auth",
								"login"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Users",
			"item": [
				{
					"name": "/v1/api/users",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTU0MTY3OTksImV4cCI6MTYxNTQxNzA5OX0.I8HXkiAReaC2uu0C3K6LtuXGf0NhN6GIBi0J3e55AVI",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/users/",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"users",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/users/:id",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjpudWxsLCJpYXQiOjE2MTg4NDAxNjQsImV4cCI6MTYxODkyNjU2NH0.Upq_FHu_wuqXbWHQ4rkwjqUmW5NDpXREQ0G-0mcU4hY",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/users/1",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"users",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "/vi/api/users/:id",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							},
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTU0MTY3OTksImV4cCI6MTYxNTQxNzA5OX0.I8HXkiAReaC2uu0C3K6LtuXGf0NhN6GIBi0J3e55AVI",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name_user\": \"Juan José\",\n    \"lastname_user\": \"López Herrera\",\n    \"password_user\": \"123456\",\n    \"email_user\": \"juan@gmail.com\"\n}"
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/users/1",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"users",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/users/:id",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/users/1",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"users",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/users",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name_user\": \"Juan José\",\n    \"lastname_user\": \"López Herrera\",\n    \"password_user\": \"123456\",\n    \"email_user\": \"juan@gmail.com\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/users",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"users"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Contacts",
			"item": [
				{
					"name": "/v1/api/contacts",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjpudWxsLCJpYXQiOjE2MTgyNDEyNDAsImV4cCI6MTYxODMyNzY0MH0.P_1Db33uL0uFQmx2EEQCszcSnwT9KRQYRSFCzm5KopA",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/contacts",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"contacts"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/contacts",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjo0NiwiaWRfcm9sZSI6bnVsbCwiaWF0IjoxNjE3Mzk2MDA0LCJleHAiOjE2MTc0ODI0MDR9.8ZIVMKcf_a36WWJmZkXGKmUinYXldg1rVxrFibILiq4",
								"type": "text"
							},
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name_contact\": \"Alfonzo\",\n    \"lastname_contact\": \"Gutierrez Hernandez\",\n    \"email_contact\": \"alfonzo@gmail.com\",\n    \"position\": \"Abogadp\",\n    \"address\": \"av. Chacaito\",\n    \"contact_account\": \"@alfonzo\",\n    \"id_company\": 1,\n    \"id_region\": 1,\n    \"id_photo\": 2,\n    \"id_country\": 1,\n    \"id_city\": 1,\n    \"id_preference\": 2,\n    \"id_commitment\": 3,\n    \"id_channel_comunication\": 1,\n    \"id_user\": 46\n}"
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/contacts",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"contacts"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/contacts/:id",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTUzMTYwNjgsImV4cCI6MTYxNTMxNjM2OH0.tK1zGOpAQ70XYKu14EV4qM99dCh8XDe7ucqbr7sFvhc",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/contacts/1",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"contacts",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/contacts/:id",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjpudWxsLCJpYXQiOjE2MTgzNDYyOTUsImV4cCI6MTYxODQzMjY5NX0.CN_SsYqD66PN0NRgztVkAiSbhyUCpcPztrJLU9uxv1s",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/contacts/8",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"contacts",
								"8"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/contacts/:id",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							},
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTUxNDM5MDcsImV4cCI6MTYxNTE0NDIwN30.AUskjzlowxOR0ejorXZDkt226c809Tydrziwm9nxSMk",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name_contact\": \"Alfonzo\",\n    \"lastname_contact\": \"Gutierrez Hernandez\",\n    \"email_contact\": \"alfonzo@gmail.com\",\n    \"position\": \"Abogadp\",\n    \"address\": \"av. Chacaito\",\n    \"contact_account\": \"@alfonzo\",\n    \"id_company\": 1,\n    \"id_region\": 1,\n    \"id_photo\": 2,\n    \"id_country\": 1,\n    \"id_city\": 1,\n    \"id_preference\": 2,\n    \"id_commitment\": 3,\n    \"id_channel_comunication\": 1,\n    \"id_user\": 46\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/contacts/1",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"contacts",
								"1"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Region",
			"item": [
				{
					"name": "/v1/api/regions",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjo0NiwiaWRfcm9sZSI6bnVsbCwiaWF0IjoxNjE3NjUwMDk3LCJleHAiOjE2MTc3MzY0OTd9.kN7SLxsoOLaXHe8m9PLk5ne6ylvLh5CXDfAMQocqvTw",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/regions",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"regions"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/regions",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTU0MTY3OTksImV4cCI6MTYxNTQxNzA5OX0.I8HXkiAReaC2uu0C3K6LtuXGf0NhN6GIBi0J3e55AVI",
								"type": "text"
							},
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name_region\": \"LATAM\",\n    \"id_user\": 1\n}"
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/regions",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"regions"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/regions/:id",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjo0NiwiaWRfcm9sZSI6bnVsbCwiaWF0IjoxNjE4MDg4NzQ0LCJleHAiOjE2MTgxNzUxNDR9.IQT-A5cIRCEgsFImnEPkNL_KTB3YYET1BUP3OHw06CE",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/regions/148",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"regions",
								"148"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/regions/:id",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjo0NiwiaWRfcm9sZSI6bnVsbCwiaWF0IjoxNjE3MjIyMjQ0LCJleHAiOjE2MTczMDg2NDR9.R-O7ebAGaWAR-7AIRbPEDaPoJggF1YV2uLdeOegDWJg",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/regions/1",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"regions",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "v1/api/regions/:id",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJKdWRpdGggTGV0aWNpYSIsImlkX3VzZXIiOjEsImlkX3JvbGUiOjIsImlhdCI6MTYxNDYxOTU2NCwiZXhwIjoxNjE0NjE5ODY0fQ.p34E6l76kuobiA5eN13s4_hz53-mYXtnRCWteUVkg1c",
								"type": "text"
							},
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name_region\": \"Norte América\"\n}"
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/regions/2",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"regions",
								"2"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Country",
			"item": [
				{
					"name": "/v1/api/countries",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTU0MTY3OTksImV4cCI6MTYxNTQxNzA5OX0.I8HXkiAReaC2uu0C3K6LtuXGf0NhN6GIBi0J3e55AVI",
								"type": "text"
							},
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name_country\": \"Venezuela\",\n    \"id_region\": 1,\n    \"id_user\": 1\n}"
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/countries",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"countries"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/countries/:id",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoyLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTQ5NzUxMTIsImV4cCI6MTYxNDk3NTQxMn0.9jWpLYz8IQmlxrs6apzX-8y5tLwYTzq5yU1DYzTmtRs",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/countries/2",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"countries",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/countries",
					"protocolProfileBehavior": {
						"disableBodyPruning": true,
						"disabledSystemHeaders": {}
					},
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTUxNDQ3NDcsImV4cCI6MTYxNTE0NTA0N30._IdB9NwbcL_Sj74kj3EvUvgvJ7bdL2iIXu-Dzf3Hf4I",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/countries",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"countries"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/countries/:id",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTQ5Nzc1NjUsImV4cCI6MTYxNDk3Nzg2NX0.PhZ7v9jiEJ6SD-JqM2i8-rT66IKeaIiAcJyD7mfzb7o",
								"type": "text"
							},
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name_country\": \"Venezuela\"\n}"
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/countries/2",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"countries",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/countries/:id",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTUxMzY0NDgsImV4cCI6MTYxNTEzNjc0OH0._4gRjwa-k5KrmB3s4TW3sa28Ktsz-GtMACgM9BQTdVg",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/countries/3",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"countries",
								"3"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "city",
			"item": [
				{
					"name": "/v1/api/city",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTU0MTcxMTAsImV4cCI6MTYxNTQxNzQxMH0.hTGw9FrRL-tD8GTODLFzB9xpi_Sxe5WvVl3yw6OP9UU",
								"type": "text"
							},
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name_city\": \"Caracas\",\n    \"id_country\": 1,\n    \"id_user\": 1\n}"
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/cities",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"cities"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/cities",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTUxNDA0MjIsImV4cCI6MTYxNTE0MDcyMn0.vxCM87IhIg8lqQOD-_-3XsqTvayCk6O2eakQbyLjHGM",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/cities",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"cities"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/cities/:id",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTQ5Nzc1NjUsImV4cCI6MTYxNDk3Nzg2NX0.PhZ7v9jiEJ6SD-JqM2i8-rT66IKeaIiAcJyD7mfzb7o",
								"type": "text"
							},
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name_city\": \"Caracas\"\n}"
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/cities/2",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"cities",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/cities/:id",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjo0NiwiaWRfcm9sZSI6bnVsbCwiaWF0IjoxNjE4MDg4ODgwLCJleHAiOjE2MTgxNzUyODB9.uwaXZx9P5mj0wVnAn-inJrEXJDl67Aq3muDplqh6ZPo",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/cities/12",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"cities",
								"12"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/cities/:id",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTUxMzY0NDgsImV4cCI6MTYxNTEzNjc0OH0._4gRjwa-k5KrmB3s4TW3sa28Ktsz-GtMACgM9BQTdVg",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/cities/3",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"cities",
								"3"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Company",
			"item": [
				{
					"name": "/v1/api/companies",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTU0MTcxMTAsImV4cCI6MTYxNTQxNzQxMH0.hTGw9FrRL-tD8GTODLFzB9xpi_Sxe5WvVl3yw6OP9UU",
								"type": "text"
							},
							{
								"key": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name_company\": \"Globant\",\n    \"id_country\": 1,\n    \"address\": \"Chacao\",\n    \"id_user\": 1\n}"
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/companies",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"companies"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/companies",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjoxLCJpZF9yb2xlIjoxLCJpYXQiOjE2MTU0MTUyNzIsImV4cCI6MTYxNTQxNTU3Mn0.yvln-dEuENGP5qVN1TkloBRvT-2FVPoBEF_7Zm2GerY",
								"type": "text"
							}
						],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/companies",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"companies"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Upload",
			"item": [
				{
					"name": "/v1/api/file/upload",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX3VzZXIiOiJJZnJhaW4gRGF2aWQiLCJpZF91c2VyIjo0NiwiaWRfcm9sZSI6bnVsbCwiaWF0IjoxNjE4MDg4ODgwLCJleHAiOjE2MTgxNzUyODB9.uwaXZx9P5mj0wVnAn-inJrEXJDl67Aq3muDplqh6ZPo",
								"type": "text"
							},
							{
								"key": "Content-Type",
								"value": "",
								"type": "text",
								"disabled": true
							}
						],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "file",
									"type": "file",
									"src": "/Users/ifraindavidmedinagarcia/Downloads/clear people letras blancas.png"
								}
							]
						},
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/api/file/upload",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"api",
								"file",
								"upload"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "get",
			"item": [
				{
					"name": "/v1/api/channel",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com/v1/channel",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"v1",
								"channel"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/preference",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com//vi/api/preference",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"",
								"vi",
								"api",
								"preference"
							]
						}
					},
					"response": []
				},
				{
					"name": "/v1/api/commiment",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://datawerehouse.herokuapp.com//v1/api/commitment",
							"protocol": "https",
							"host": [
								"datawerehouse",
								"herokuapp",
								"com"
							],
							"path": [
								"",
								"v1",
								"api",
								"commitment"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}