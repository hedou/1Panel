import { AITool } from '@/api/interface/ai-tool';
import http from '@/api';
import { ResPage } from '../interface';

export const createOllamaModel = (name: string) => {
    return http.post(`/aitools/ollama/model`, { name: name });
};
export const deleteOllamaModel = (name: string) => {
    return http.post(`/aitools/ollama/model/del`, { name: name });
};
export const searchOllamaModel = (params: AITool.OllamaModelSearch) => {
    return http.post<ResPage<AITool.OllamaModelInfo>>(`/aitools/ollama/model/search`, params);
};
export const loadOllamaModel = (name: string) => {
    return http.post<string>(`/aitools/ollama/model/load`, { name: name });
};

export const loadGPUInfo = () => {
    return http.get<any>(`/aitools/gpu/load`);
};

export const bindDomain = (req: AITool.BindDomain) => {
    return http.post(`/aitools/domain/bind`, req);
};

export const getBindDomain = (req: AITool.BindDomainReq) => {
    return http.post<AITool.BindDomainRes>(`/aitools/domain/get`, req);
};

export const updateBindDomain = (req: AITool.BindDomain) => {
    return http.post(`/aitools/domain/update`, req);
};
