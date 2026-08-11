import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
    private readonly baseUrl: string;
    private readonly headers: Record<string, string>;

    constructor(private request: APIRequestContext) {
        const baseUrl = process.env.API_BASE_URL;
        const apiKey = process.env.REQRES_API_KEY;

        if (!baseUrl) {
            throw new Error('API_BASE_URL is not defined.');
        }

        if (!apiKey) {
            throw new Error('REQRES_API_KEY is not defined.');
        }

        this.baseUrl = baseUrl;

        this.headers = {
            'x-api-key': apiKey,
            'Content-Type': 'application/json'
        };
    }

    private async get(endpoint: string): Promise<APIResponse> {
        return this.request.get(`${this.baseUrl}${endpoint}`, {
            headers: this.headers
        });
    }

    private async post(
        endpoint: string,
        payload: Record<string, unknown>
    ): Promise<APIResponse> {

        return this.request.post(`${this.baseUrl}${endpoint}`, {
            headers: this.headers,
            data: payload
        });
    }

    async getUser(userId: number): Promise<APIResponse> {
        return this.get(`/users/${userId}`);
    }

    async login(payload: Record<string, unknown>): Promise<APIResponse> {
        return this.post('/login', payload);
    }

    async invalidEndpoint(): Promise<APIResponse> {
        return this.get('/invalid-endpoint');
    }
}