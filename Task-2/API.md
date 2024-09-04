# Nudge API Documentation
The API allows clients to perform CRUD (Create, Read, Update, Delete) operations on Nudges. Below is the detailed documentation of the API endpoints, request types, payloads, and descriptions.

### BASE URL
```sh
    https://api.yourapp.com/v1
```

## Endpoints

### 1.Create a Nudge

- URL: `/nudges`
- Method: `POST`
- Description: Create a new nudge for an event.
- Payload:

```json
{
  "eventId": "uuid",
  "title": "string",
  "description": "string",
  "coverImageUrl": "string",
  "iconUrl": "string",
  "invitationLine": "string",
  "sendTime": "ISO 8601 DateTime",
  "createdAt": "ISO 8601 DateTime",
  "updatedAt": "ISO 8601 DateTime"
}
```
- Response:
    - status: `201 Created`
    - Body: we will get JSON format for the data


### 2.Retrieve All Nudges

- URL: `/nudges`
- Method: `GET`
- Description: Retrieve all nudges, optionally filtered by event.
- Query Parameters:
  - eventId (optional): UUID of the event to filter nudges.
  - limit (optional): Number of nudges to retrieve.
  - offset (optional): Pagination offset.
- Response:
    - Status: 200 OK


### 3.Retrieve a Single Nudge

 - Endpoint: /nudges/{nudgeId}
 - Method: GET
 - Description: Retrieves details of a specific nudge by its ID.
 - Path Parameters:
    - nudgeId (UUID): ID of the nudge to retrieve.
 - Response:
    - Status: 200 OK

### 4.Updating a Nudge

 - URL: `/nudges/{nudgeId}`
 - Method: `PUT`
 - Description: Updates the details of an existing nudge.
 - Path Parameters:
    - nudgeId(UUID): ID of the nudge to update.
 - Payload:
    - The fields to be updated
 - Response:
    - Status: 200 OK


### Deleting a Nudge

- URL: `/nudges/{nudgeId}`
- Method: `DELETE`
- Description: Deletes a specific nudge by its ID.
- Path Parameters:
    - nudgeId (UUID): ID of the nudge to delete.
- Response:
    - Status: 204 No Content
