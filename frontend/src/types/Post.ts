export type AnimalType =  "Perro"| "Gato" ;
export type AlertType = "Perdido" | "Abandonado" | "Adopción" | "Crítico";
export type ProvinceType = "Pinar del río" | "Artemisa" | "La Habana" | "Mayabeque" | "Matanzas" | "Cienfuegos" | "Villa Clara" | "Sancti Spíritus" | "Ciego de Ávila" | "Camagüey" | "Las Tunas" | "Granma" | "Holguín" | "Santiago de Cuba" | "Guantánamo" | "Isla de la Juventud";

export interface PostType {
    _id: string;
    animal?: AnimalType;
    alert_type: AlertType;
    municipality?: string;
    date: string;
    description?: string;
    from?: string;
    picture_path?: string;
    province: ProvinceType;
    author_id?: string;
    email?: string;
    phone?: string;
    gender?: string;
    age?: string;
    address?: string;
}